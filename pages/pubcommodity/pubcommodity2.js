var app = getApp()

Page({
  data: {
    commoInfo: {},
    tempFilePaths: [],
    tempFilenum: 0,
    maxNum: 3,
    des: ["1，一次可以上传1~3张图片。", "2，长按可以删除图片。", "3，图片尽量清晰明亮。", "4，图片应当符合描述", "发布后请耐心等待审核"],
  },

  onLoad: function(options){
    var commoInfo = options
    this.setData({
      commoInfo: commoInfo
    })
  },

  //打开相册，上传图片
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths,
          tempFilenum: res.tempFilePaths.length
        })
        console.log(_this.data.tempFilePaths)
      }
    })
  },

  error(e) {
    console.log(e.detail)
  },

  deleteImage: function (e) {
    var that = this;
    var images = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          images.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          tempFilePaths: images
        });
      }
    })
  },

  pubCommo: function(){
    if(this.data.tempFilenum == 0){
      wx.showToast({
        title: '请添加图片',
      })
    }else{
      if (this.pubCommoInfo() & this.pubImage())
        wx.showToast({
          title: '发布成功',
          success:()=>{
            wx.redirectTo({
              url: 'pubcommodity',
            })
          }
        })
      else
        wx.showToast({
          title: '发布失败',
          icon: 'cancel'
        })
    }
  },

  pubCommoInfo: function(){
    wx.request({
      url: '',
      data: {
        commoInfo: this.data.commoInfo
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        if(res.data == "false")
          return false
        else
          return true
      },
      fail: function (res) {
        return false
      },
      complete: function (res) { }
    })
  },

  pubImage: function(){
    const tempFilePaths = this.data.tempFilePaths
    var num = this.data.tempFilenum
    var commoInfo = this.data.commoInfo
    for(var i = 0; i < num; i++){
      wx.uploadFile({
        url: '',
        filePath: tempFilePaths[i],
        name: commoInfo.name,
        success:(res) =>{
          if(res.data === "false")
            return false
          else
            return true
        },
        fail(res){
          return false
        }
      })
    }
   
  }
  
})
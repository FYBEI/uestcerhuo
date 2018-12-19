var app = getApp()

Page({
  data: {
    commoInfo: {},
    tempFilePaths: [],
    tempFilenum: 0,
    maxNum: 3,
    goodsName: '',
    stdId: 2333,
    estimatePrice: 0,
    category: '',
    specialDemage: '',
    goodsId: 1,
    goodsCondition: '',
    des: ["1，一次可以上传1~3张图片。", "2，长按可以删除图片。", "3，图片尽量清晰明亮。", "4，图片应当符合描述", "发布后请耐心等待审核"],
  },

  onLoad: function(options){
    console.log(options)
    this.setData({
      goodsName: options.name,
      estimatePrice: options.price,
      category: options.classify,
      specialDemage: options.specialbroke,
      goodsCondition: options.level
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
      var result1 = this.pubCommoInfo()
      var result2 = this.pubImage()
      if (result1 & result2){
        wx.showToast({
          title: '发布成功',
          success:()=>{
            wx.redirectTo({
              url: 'pubcommodity',
            })
          }
        })
      }else{
        wx.showToast({
          title: '发布失败',
          icon: 'cancel'
        })
      }
    }
  },

  pubCommoInfo: function(){
    wx.request({
      url: 'https://www.lxfengch.xyz/commodity/addcommodity',
      data: {
        stdId: this.data.stdId,
        goodsName: this.data.goodsName,
        estimatePrice: this.data.estimatePrice,
        goodsCondition: this.data.goodsCondition,
        specialDemage: this.data.specialDemage,
        category: this.data.category
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
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
    for(var i = 0; i < num; i++){
      wx.uploadFile({
        url: 'https://www.lxfengch.xyz/images/upload',
        filePath: tempFilePaths[i],
        name: "image",
        success:(res) =>{
          if(res.data)
            return true
          else
            return false
        },
        fail(res){
          return false
        }
      })
    }
   
  }
  
})
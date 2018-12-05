// pages/myself/pubedcommodity/changeCommoInfo/changeCommoInfo.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    commoInfo:{},
    photonum: 0,
    photo: [],
    classindex: 0,
    levelindex: 0,
    classarr: ['二手书', '生活用品', '服饰', '电子产品', '学习用具', '运动'],
    levelarr: ['九', '八', '七', '六', '五', '四', '三'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var commoId = options.Id
    this.getCommoInfo(commoId)
    var commoInfo = this.data.commoInfo
    var levelindex = this.data.levelarr.indexOf(commoInfo.level)
    var classindex = this.data.classarr.indexOf(commoInfo.commoclass)
    this.setData({
      levelindex: levelindex,
      classindex: classindex
    })
  },

  getCommoInfo: function(commoId){
    wx.request({
      url: '',
      data: {
        commoId: commoId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          commoInfo: res.data.commoInfo
        })
      },
      fail: function (res) {
        console.log("fail")
      },
      complete: function (res) { }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  deleteImage: function (e) {
    var that = this;
    var images = that.data.photo;
    var photonum = that.data.photonum;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          images.splice(index, 1);
          photonum--;
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          photo: images,
          photonum: photonum  
        });
      }
    })
    console.log(that.data.photo)
  },

  //种类选择器
  classChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      classindex: e.detail.value,
    })
    this.data.commoInfo.commoclass = this.data.classarr[this.data.classindex]
  },

  //新旧选择器
  levelChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      levelindex: e.detail.value,
    })
    this.data.commoInfo.level = this.data.levelarr[this.data.levelindex]
  },

  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          photo: res.tempFilePaths,
          photonum: res.tempFilePaths.length
        });
        console.log(res)
      }
    })
  },

  //删除商品
  deleteCommo: function(e){
    wx.showModal({
      title: '提示',
      content: '确定要删除此商品吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          wx.request({
            url: '',
            data: {
              commoId: this.data.commoInfo.commoId
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
             
                wx.showToast({
                  title: '删除成功',
                })
            
            },
            fail: function (res) {
              wx.showToast({
                title: '删除失败',
              })
            },
            complete: function (res) { }
          })


        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }

      }
    })
  },

  //确定修改信息
  sureChange: function(e){
    wx.showModal({
      title: '提示',
      content: '确定要修改此商品信息吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          if(this.upCommoInfo() & this.upImage())
            wx.showToast({
              title: '修改成功',
              success:function(res){
                wx.navigateTo({
                  url: '../pubedcommodity',
                })
              }
            })
          else{
            wx.showToast({
              title: '修改失败',
              icon: 'cancel',
            })
          }

        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }

      }
    })
  },

  upCommoInfo:function(){
    wx.request({
      url: '',
      data: {
        commoInfo: this.data.commoInfo
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        return true
      },
      fail: function (res) {
        return false
      },
      complete: function (res) { }
    })
  },

  upImage: function(){
    var num = this.data.photonum
    for(var i = 0; i < num; i++){
      wx.uploadFile({
        url: '',
        filePath: this.data.photo[i],
        name: this.data.commoId + 'photo' + i,
        fail:function(res){
          return false
        }
      })
    }
    return true
  },

  //商品已售
  soldCommo: function(e){
    wx.showModal({
      title: '提示',
      content: '确定要此商品已卖出吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          wx.request({
            url: '',
            data: {
              commoId: this.data.commoInfo.commoId
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
            
                wx.showToast({
                  title: '修改成功',
                })
           
            },
            fail: function (res) {
              wx.showToast({
                title: '修改失败',
              })
            },
            complete: function (res) { }
          })


        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }

      }
    })
  }
})
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
    var commoInfo = JSON.parse(options.commoInfo)
    var levelindex = this.data.levelarr.indexOf(commoInfo.level)
    var classindex = this.data.classarr.indexOf(commoInfo.commoclass)
    this.setData({
      commoInfo: commoInfo,
      photo: commoInfo.photo,
      photonum: commoInfo.photo.length,
      levelindex: levelindex,
      classindex: classindex
    })
    console.log(this.data.commoInfo)
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
})
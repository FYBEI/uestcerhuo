// pages/myself/myselfContent/changeInfo/changeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    description: '',
    studentnum: '',
    college: '',
    weinum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      description: options.description,
      studentnum: options.studentnum,
      college: options.college
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

  numinput: function(e){
    this.setData({
      studentnum: e.detail.value
    })
  },

  collegeinput: function (e) {
    this.setData({
      college: e.detail.value
    })
  },

  desinput: function (e) {
    this.setData({
      description: e.detail.value
    })
  },

  weinuminput: function (e) {
    this.setData({
      weinum: e.detail.value
    })
  },


  sure: function(){
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    prevPage.setData({//直接给上移页面赋值
      studentnum: this.data.studentnum,
      college: this.data.college,
      description: this.data.description,
      weinum: this.data.weinum
    });
    wx.navigateBack({
      url: '../myselfContent',
    })
  },

  cancel: function(){
    wx.navigateBack({
      url: '../myselfContent',
    })
  }
})
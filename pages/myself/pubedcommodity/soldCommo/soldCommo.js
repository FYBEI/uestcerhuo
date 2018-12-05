// pages/myself/pubedcommodity/soldCommo/soldCommo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commoInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var commoId = options.commoId
    this.getCommoInfo(commoId)
  },

  getCommoInfo: function (commoId) {
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

  }
})
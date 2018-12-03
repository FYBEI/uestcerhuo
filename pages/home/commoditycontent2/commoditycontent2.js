// pages/home/commoditycontent2/commoditycontent2.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    commodity: { name: '微积分上(人教版)', price: 10, num: 3, broke: '无破损，略旧.请你们的产品经理吃顿饭，好好了解一下吧；如果有工厂的话，去看看绝对比坐在办公室脑补自嗨强得多。', level: '八' },
    owner: { pic: '/images/myself/head.gif', name: '王二狗', description: '666', pubed: 1, sold: 1, weinum: '123' },
    index: 0
  },

  getCommo: function (commoId) {
    wx.request({
      url: '',
      data: {
        commoId: commoId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data),
          this.setData({
            commodity: res.data.commodity
          })
      },
      fail: function (res) {
        console.log("失败了")
      },
      complete: function (res) { }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var commoId = options.commoId
    this.getCommo(commoId)
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
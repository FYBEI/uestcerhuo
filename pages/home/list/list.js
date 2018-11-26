// pages/home/list/list.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    commodities: [{ photo: "/images/commoimage/co1.jpg", name: "毛概", price: "￥10" },
    { photo: "/images/commoimage/co2.jpg", name: "马哲", price: "￥20" },
    { photo: "/images/commoimage/co3.jpg", name: "线代", price: "￥30" },
    { photo: "/images/commoimage/co4.png", name: "高数", price: "￥40" },
    { photo: "/images/commoimage/co5.jpg", name: "概率论", price: "￥50" },
    { photo: "/images/commoimage/co6.jpg", name: "C语言", price: "￥60" },
    { photo: "/images/commoimage/co7.jpg", name: "数据结构", price: "￥70" },
    { photo: "/images/commoimage/co8.jpg", name: "计组", price: "￥80" },],
    search: '',
  },

  getCommos: function (url, search) {
    wx.request({
      url: url,
      data: {
        search: search
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data),
          this.setData({
            commodities: res.data.commos
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
    var search = options.search
    console.log("关键字"+search)
    var url = app.globalData.serurl
    this.getCommos(url, search)
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

  enterContent: function (e) {
    wx.navigateTo({
      url: '../commoditycontent/commoditycontent'
    })
  },

  searchInput: function (e) {
    var search = e.detail.value
    this.setData({
      search: search
    })
    console.log(this.data.search)
  },

  searchFn: function () {
    var search = this.data.search
    wx.navigateTo({
      url: '/pages/home/list/list?search='+search,
    })
  }  
})
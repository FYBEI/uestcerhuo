// pages/home/list/list.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    commodities: [],
    search: '',
  },

  //请求相关商品列表
  getCommos: function (url, search) {
    wx.request({
      url: url,
      data: {
        goodsName: search
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data),
          this.setData({
            commodities: res.data.commodityList
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
  //接受前一个页面传输来的关键字，请求相关商品列表
  onLoad: function (options) {
    var search = options.search
    console.log("关键字:"+search)
    var url = 'https://www.lxfengch.xyz/commodity/listcommoditybyname'
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

  //向商品详细页面传输商品id
  enterContent: function (e) {
    var index = e.currentTarget.dataset.index
    var commoId = this.data.commodities[index].id
    wx.navigateTo({
      url: '../commoditycontent/commoditycontent?commoId' + commoId,
    })
  },

  searchInput: function (e) {
    var search = e.detail.value
    this.setData({
      search: search
    })
    console.log(this.data.search)
  },

  //搜索框
  searchFn: function () {
    var search = this.data.search
    wx.navigateTo({
      url: '/pages/home/list/list?search='+search,
    })
  }  
})
// pages/home/commoditycontent/solderInfo/solderInfo.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    solderId: '',
    solder: {},
    navbar: ['待售中', '已卖出'],
    currentTab: 0,
    commo1: [{ photo: ["/images/commoimage/co1.jpg", "/images/commoimage/co3.jpg", ""], name: "毛概", price: "￥10", num: 1, broke: "", level: '九', commoclass: "二手书" },
    { photo: ["/images/commoimage/co2.jpg", "/images/commoimage/co3.jpg", ""], name: "马哲", price: "￥20", num: 1, broke: "", level: '八', commoclass: "二手书" },
    { photo: ["/images/commoimage/co3.jpg", "", ""], name: "线代", price: "￥30", num: 1, broke: "", level: '七', commoclass: "二手书" },
    { photo: ["/images/commoimage/co4.png", "", ""], name: "高数", price: "￥40", num: 1, broke: "", level: '六', commoclass: "二手书" },
    { photo: ["/images/commoimage/co5.jpg", "", ""], name: "概率论", price: "￥50", num: 1, broke: "", level: '五', commoclass: "二手书" },
    { photo: ["/images/commoimage/co6.jpg", "", ""], name: "C语言", price: "￥60", num: 1, broke: "", level: '四', commoclass: "二手书" },
    { photo: ["/images/commoimage/co7.jpg", "", ""], name: "数据结构", price: "￥70", num: 1, broke: "", level: '三', commoclass: "二手书" },
    { photo: ["/images/commoimage/co8.jpg", "", ""], name: "计组", price: "￥80", num: 1, broke: "", level: '二', commoclass: "二手书" },],
    commo2: [{ photo: "", name: "", price: "" },
    { photo: "", name: "", price: "" },
    { photo: "", name: "", price: "" },
    { photo: "", name: "", price: "" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //接受商品详细页传来的商家id，获取商家详细信息，商家待售商品列表，商家已售商品列表
  onLoad: function (options) {
    var solderId = options.solderId
    this.setData({
        solderId: solderId
    })
    console.log(solderId)
    this.getSolder(this.data.solderId);
    this.getSellingCommoList(this.data.solderId);
    this.getSoldCommoList(this.data.solderId);
  },

  //获取商家信息
  getSolder: function(solderId){
    wx.request({
      url: '',
      data: {
        solderId: solderId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
        this.setData({
          solder: res.data.solder
        })
      },
      fail: function (res) {
        console.log("失败了")
      },
      complete: function (res) { }
    })
  },

  //获取商家待售商品列表
  getSellingCommoList: function(solderId){
    wx.request({
      url: '',
      data: {
        solderId: solderId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
        this.setData({
          commo1: res.data.commolist
        })
      },
      fail: function (res) {
        console.log("失败了")
      },
      complete: function (res) { }
    })
  },

  //获取商家已售商品列表
  getSoldCommoList: function(solder){
    wx.request({
      url: '',
      data: {
        solderId: solderId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
        this.setData({
          commo2: res.data.commolist
        })
      },
      fail: function (res) {
        console.log("失败了")
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

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  enterContent: function (e) {
    var index = e.currentTarget.dataset.index
  
    var commoId = this.data.commo1[index].commoId
    wx.navigateTo({
      url: '/pages/home/commoditycontent/commoditycontent?commoId='+commoId,
    })
  },

  enterContent2: function (e) {
    var index = e.currentTarget.dataset.index

    var commoId = this.data.commo2[index].commoId
    wx.navigateTo({
      url: '/pages/home/commoditycontent2/commoditycontent2?commoId='+commoId,
    })
  }
})
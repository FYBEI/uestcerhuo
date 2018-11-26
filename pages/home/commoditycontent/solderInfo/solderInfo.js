// pages/home/commoditycontent/solderInfo/solderInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    solder: [],
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
  onLoad: function (options) {
    var solder = JSON.parse(options.solder)
    this.setData({
        solder: solder
    })
    console.log(solder)
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
    if (this.data.currentTab === 0)
      var arr = JSON.stringify(this.data.commo1[index])
    else if (this.data.currentTab === 1)
      var arr = JSON.stringify(this.data.commo2[index])
    wx.navigateTo({
      url: `/pages/home/commoditycontent/commoditycontent?commoInfo=${arr}`,
    })
  },

  enterContent2: function (e) {
    var index = e.currentTarget.dataset.index
    if (this.data.currentTab === 0)
      var arr = JSON.stringify(this.data.commo1[index])
    else if (this.data.currentTab === 1)
      var arr = JSON.stringify(this.data.commo2[index])
    wx.navigateTo({
      url: `/pages/home/commoditycontent2/commoditycontent2?commoInfo=${arr}`,
    })
  }
})
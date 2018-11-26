// pages/myself/pubedcommodity/pubedcommodity.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['已发布', '已售出'],
    currentTab: 0,
    commo1: [{ photo: ["/images/commoimage/co1.jpg", "/images/commoimage/co3.jpg","/images/commoimage/co4.png"], name: "毛概", price: "￥10",num: 1, broke: "", level: '九', commoclass: "二手书"},
      { photo: ["/images/commoimage/co2.jpg","/images/commoimage/co3.jpg",""], name: "马哲", price: "￥20", num: 1, broke: "", level: '八', commoclass: "二手书"},
      { photo: ["/images/commoimage/co3.jpg","",""], name: "线代", price: "￥30", num: 1, broke: "", level: '七', commoclass: "二手书" },
      { photo: ["/images/commoimage/co4.png","",""], name: "高数", price: "￥40", num: 1, broke: "", level: '六', commoclass: "二手书" },
      { photo: ["/images/commoimage/co5.jpg","",""], name: "概率论", price: "￥50", num: 1, broke: "", level: '五', commoclass: "二手书" },
      { photo: ["/images/commoimage/co6.jpg","",""], name: "C语言", price: "￥60", num: 1, broke: "", level: '四', commoclass: "二手书" },
      { photo: ["/images/commoimage/co7.jpg","",""], name: "数据结构", price: "￥70", num: 1, broke: "", level: '三', commoclass: "二手书" },
      { photo: ["/images/commoimage/co8.jpg","",""], name: "计组", price: "￥80", num: 1, broke: "", level: '二', commoclass: "二手书" },],
    commo2: [{ photo: ["/images/commoimage/co1.jpg", "/images/commoimage/co3.jpg", ""], name: "毛概", price: "￥10", num: 1, broke: "", level: '九', commoclass: "二手书" },
    { photo: ["/images/commoimage/co2.jpg", "/images/commoimage/co3.jpg", ""], name: "马哲", price: "￥20", num: 1, broke: "", level: '八', commoclass: "二手书" },
    { photo: ["/images/commoimage/co3.jpg", "", ""], name: "线代", price: "￥30", num: 1, broke: "", level: '七', commoclass: "二手书" },
    { photo: ["/images/commoimage/co4.png", "", ""], name: "高数", price: "￥40", num: 1, broke: "", level: '六', commoclass: "二手书" },
    { photo: ["/images/commoimage/co5.jpg", "", ""], name: "概率论", price: "￥50", num: 1, broke: "", level: '五', commoclass: "二手书" },
    { photo: ["/images/commoimage/co6.jpg", "", ""], name: "C语言", price: "￥60", num: 1, broke: "", level: '四', commoclass: "二手书" },
    { photo: ["/images/commoimage/co7.jpg", "", ""], name: "数据结构", price: "￥70", num: 1, broke: "", level: '三', commoclass: "二手书" },
    { photo: ["/images/commoimage/co8.jpg", "", ""], name: "计组", price: "￥80", num: 1, broke: "", level: '二', commoclass: "二手书" },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  enterContent: function(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var arr = JSON.stringify(that.data.commo1[index])
    
    wx.navigateTo({
      url: `changeCommoInfo/changeCommoInfo?commoInfo=${arr}`,
    })
  },

  enterContent2: function(e){
    var index = e.currentTarget.dataset.index
    var arr = JSON.stringify(this.data.commo2[index])
    wx.navigateTo({
      url: `soldCommo/soldCommo?commoInfo=${arr}`,
    })
  },

  deleteCommo: function(e){
    var that = this
    var commo = that.data.commo1
    var index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除此商品吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          commo.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          commo1: commo
        });
      }
    })
  },

  soldCommo: function(e){
    var that = this
    var commo1 = that.data.commo1
    var commo2 = that.data.commo2
    var index = e.currentTarget.dataset.index
    var commo = commo1[index]
    console.log("commo: "+commo)
    console.log("type: "+typeof(commo))
    wx.showModal({
      title: '提示',
      content: '确定已出售此商品吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          commo2.push(commo);
          commo1.splice(index, 1);
          console.log(commo2);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          commo1: commo1,
          commo2: commo2
        });
      }
    })
  }
})
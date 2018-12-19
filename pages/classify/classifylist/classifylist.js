// pages/classify/classifylist/classifylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    commodities: [],
    search: '',
  },

  getClassList: function(name){
    
    wx.request({
      url: 'https://www.lxfengch.xyz/commodity/listcommoditybycategory',
      data: {
        category: name  
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
  onLoad: function (options) {
    var name = options.name
    this.setData({
      name: name
    })
    this.getClassList(name);
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
      url: '../../home/commoditycontent/commoditycontent'
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
  }  
})
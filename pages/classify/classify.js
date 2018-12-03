// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classification:[{name:"二手书",pic:"/images/classify/二手书.jpg"},
      { name: "生活用品", pic:"/images/classify/生活用品.jpg"},
      { name: "服饰", pic:"/images/classify/服饰.jpg"},
      { name: "电子产品", pic:"/images/classify/电子产品.jpg"},
      { name: "学习用具", pic:"/images/classify/学习用具.jpg"},
      { name: "运动", pic:"/images/classify/运动.jpg"}
    ],
    search: '',
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

  //进入分类列表页
  enterlist: function(e) {
    var index = e.currentTarget.dataset.index
    var name = this.data.classification[index].name
    wx.navigateTo({
      url: 'classifylist/classifylist?name='+name,
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
      url: '/pages/home/list/list?search=' + search,
    })
  } 
})
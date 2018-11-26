// pages/pubcommodity/pubcommodity.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classindex: 0,
    levelindex: 0,
    classarr: ['二手书', '生活用品', '服饰', '电子产品', '学习用具', '运动'],
    place: [{ name: '二手微积分上', broke: '封面略旧', num: '1', price: '10'}, 
                { name: '二手电吹风', broke: '无磨损', num: '1', price: '20'},
                { name: 'zara衬衫', broke: '无磨损，已洗干净', num: '1', price: '30'}, 
                { name: '二手先锋耳机', broke: '无磨损', num: '1', price: '30'},
                { name: '二手计算器', broke: '外壳略旧', num: '1', price: '10'}, 
                { name: '李宁球鞋', broke: '穿过一两次', num: '1', price: '50'}],
    levelarr: ['九','八','七','六','五','四','三'],
    name: '商品名',
    classify: '',
    specialbroke: '磨损情况',
    level: '',
    num: 1,
    price: 0
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

  //种类选择器
  classChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      classindex: e.detail.value,
    })
    this.data.classify = this.data.classarr[this.data.classindex]
  },

  //新旧选择器
  levelChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      levelindex: e.detail.value,
    })
    this.data.level = this.data.levelarr[this.data.levelindex]
  },

  next: function(){
      wx.navigateTo({
        url: 'pubcommodity2?name='+this.data.name+'&classify='+this.data.classify+'&specialbroke='+this.data.specialbroke+'&level='+this.data.level+'&num='+this.data.num+'&price='+this.data.price,
      })
  }

})
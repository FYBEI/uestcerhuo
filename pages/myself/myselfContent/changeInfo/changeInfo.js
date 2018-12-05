// pages/myself/myselfContent/changeInfo/changeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    description: '',
    studentnum: '',
    college: '',
    weinum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      description: options.description,
      studentnum: options.studentnum,
      college: options.college
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

  numinput: function(e){
    this.setData({
      studentnum: e.detail.value
    })
  },

  collegeinput: function (e) {
    this.setData({
      college: e.detail.value
    })
  },

  desinput: function (e) {
    this.setData({
      description: e.detail.value
    })
  },

  weinuminput: function (e) {
    this.setData({
      weinum: e.detail.value
    })
  },


  sure: function(){
    wx.request({
      url: '',
      data: {
        description: this.data.description,
        studentnum: this.data.studentnum,
        college: this.data.college,
        weinum: this.data.weinum
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
        wx.navigateTo({
          url: '../myselfContent',
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '修改失败',
        })
      },
      complete: function (res) { }
    })
    
  },

  cancel: function(){
    wx.navigateTo({
      url: '../myselfContent',
    })
  }
})
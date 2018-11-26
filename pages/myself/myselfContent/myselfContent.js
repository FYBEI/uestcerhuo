// pages/myself/myselfContent/myselfContent.js\
Page({
  data:{
    userInfo: {},
    studentnum: '',
    college: '',
    description: '',
    weinum: '',
  },

  onLoad: function(options){
    var userInfo = JSON.parse(options.userInfo)
    this.setData({
      userInfo: userInfo
    })
  },

  onShow: function(options){
    console.log(options)
  },

  bianji: function(e){
    wx.navigateTo({
      url: '../myselfContent/changeInfo/changeInfo?description='+this.data.description+'&studentnum='+this.data.studentnum+'&college='+this.data.college,
    })
  }
})
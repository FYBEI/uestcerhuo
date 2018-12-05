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
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        console.log(res.data)
        wx.request({
          url: '',
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (res) => {
            console.log(res.data)
            this.setData({
              userInfo: res.data.userInfo
            })
          },
          fail: function (res) {
            console.log("失败了")
          },
          complete: function (res) { }
        })
      },
    })
    
  },

  onShow: function(options){
    console.log(options)
  },

  bianji: function(e){
    wx.redirectTo({
      url: '../myselfContent/changeInfo/changeInfo?description='+this.data.description+'&studentnum='+this.data.studentnum+'&college='+this.data.college,
    })
  }
})
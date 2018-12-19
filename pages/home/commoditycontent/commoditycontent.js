var app = getApp() 

Page({
  data: {
    commodity: {},
    owner: {pic: '/images/myself/head.gif', name: '王二狗', description: '666', pubed: 1, sold: 1, weinum: '123'},
    index: 0,
  },
  
  //获得商品详细信息
  getCommo: function (commoId) {
    wx.request({
      url: 'https://www.lxfengch.xyz/commodity/listcommoditydetails',
      data: {
        goodsId: commoId
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data),
          this.setData({
            commodity: res.data.commodityDetails
          })
        console.log(this.data.commodity)
      },
      fail: function (res) {
        console.log("失败了")
      },
      complete: function (res) { }
    })
  },

  //获得前一个页面传来的商品id，并且请求商品详细信息
  onLoad: function (options) {
    var commoId = options.commoId
    this.getCommo( commoId)
    
  },

  onShow: function(){
    
  },

  //向商家信息页面传输商家Id
  checksolderInfo: function(){
    var solderId = this.data.owner.solderId
    
    wx.navigateTo({
      url: 'solderInfo/solderInfo?solderId='+solderId,
    })
  },

  //复制商家的微信号
  revbtn: function(){
    var weinum = this.data.owner.weinum
    wx.showModal({
      title: '联系卖家',
      content: '请通过微信和卖家联系线下交易的地点和时间',
      success(res) {
        if(res.confirm){
          wx.setClipboardData({
            data: weinum,
            success(){
              wx.showToast({
                title: '微信号已复制到剪贴板',
                icon: 'none'
              })
            }
          })
        }else if(res.cancel){
          wx.showToast({
            title: '已取消联系卖家',
            icon: 'cancel'
          })
        }
      }
    })
  }  
})
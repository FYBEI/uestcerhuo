var app = getApp();

Page({
  data: {
    commodities: [],
    search: '',
  },

  //获取推荐商品列表
  getCommos: function(url){
    wx.request({
      url: url,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
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

  onLoad: function(){
    var url = 'https://www.lxfengch.xyz/commodity/listcommodity'
    this.getCommos(url)
  },

  //进入用户须知页面
  goshouldknow: function(){
    wx.navigateTo({
      url: '../home/shouldknow/shouldknow',
    })
  },

  //进入商品详细页面，传输商品id
  enterContent: function(e){
    var index = e.currentTarget.dataset.index
    var commoId = this.data.commodities[index].id
    console.log(commoId)
    wx.navigateTo({
      url: 'commoditycontent/commoditycontent?commoId='+commoId,
    })
  },

  searchInput: function(e){
    var search = e.detail.value
    this.setData({
      search: search
    })
    console.log(this.data.search)
  },

  //搜索框
  searchFn: function(){
    var search = this.data.search
    wx.navigateTo({
      url: 'list/list?search='+search,
    })
  }

})
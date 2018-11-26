var app = getApp();

Page({
  data: {
    commodities: [{id: 0, photo: "/images/commoimage/co1.jpg", name: "毛概", price: "￥10" },
      { id: 1, photo: "/images/commoimage/co2.jpg", name: "马哲", price: "￥20" },
      { id: 2, photo: "/images/commoimage/co3.jpg", name: "线代", price: "￥30" },
      { id: 3, photo: "/images/commoimage/co4.png", name: "高数", price: "￥40" },
      { id: 4, photo: "/images/commoimage/co5.jpg", name: "概率论", price: "￥50" },
      { id: 5, photo: "/images/commoimage/co6.jpg", name: "C语言", price: "￥60" },
      { id: 6, photo: "/images/commoimage/co7.jpg", name: "数据结构", price: "￥70" },
      { id: 7, photo: "/images/commoimage/co8.jpg", name: "计组", price: "￥80" },],
    search: '',
  },

  getCommos: function(url){
    wx.request({
      url: url,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data)
      },
      fail: function (res) {
        console.log("失败了")
      },
      complete: function (res) { }
    })
  },

  onLoad: function(){
    var url = 'https:/192.168.31.202:8080/secondarytrading/commodity/listcommodity'
    this.getCommos(url)
  },

  goshouldknow: function(){
    wx.navigateTo({
      url: '../home/shouldknow/shouldknow',
    })
  },

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

  searchFn: function(){
    var search = this.data.search
    wx.navigateTo({
      url: 'list/list?search='+search,
    })
  }

})
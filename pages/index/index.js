//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://www.dyjkglass.com/uploadpic/banner/e38058d9-4e21-47cd-b7e9-c99d38faf028.jpg',
      'http://www.dyjkglass.com/uploadpic/banner/584984c7-e731-4671-8471-7e5e9dd2f222.jpg',
      'http://www.dyjkglass.com/uploadpic/banner/d1f79710-6277-4eac-89f2-5f0ebf8e3222.jpg',
      'http://www.dyjkglass.com/uploadpic/banner/b939483b-8640-4a2f-8edf-9a5c9b1c84aa.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

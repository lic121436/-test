// pages/scan-code/scan-code.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    userInfo: {}
  },

  scanCode: function(e){
    var that = this;
    wx.scanCode({
      success: (res) => {
        console.log(res);
        that.setData({
          result: res.result
        });
        // wx.navigateTo({
        //   url: res.result
        // })
      },
      fail: (res) => {
        console.log(res);
      },
      complete: (res) => {
        console.log(res);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.getUserInfo((openid) => {
      that.setData({
        userInfo: app.globalData.userInfo,
        userName: app.globalData.userInfo.nickName,
        userOpenid: openid
      })
      console.log('用户openid', that.data.userOpenid)
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
  
  }
})
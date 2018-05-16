// pages/move-to/move-to.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveWidth: '150',
    moveHeight: '150',
    moveTop: '', // 按钮的top
    moveLeft: '', // 按钮的left
    maxWidth: '',    // 可拖拽的最大宽度
    maxHeight: '',   // 可拖拽的最大高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(wx.getSystemInfoSync());
    let maxWidth = wx.getSystemInfoSync().windowWidth;
    let maxHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      maxWidth,
      maxHeight
    });
    console.log(this.data.maxWidth, this.data.maxHeight);
  },

  /**
   *  手指触摸动作开始
   */
  touchstart(e) {
    console.log(e.touches);
    let moveTop = e.touches[0].pageY;
    let moveLeft = e.touches[0].pageX;
    this.setData({
      moveTop,
      moveLeft
    });
    console.log(this.data.moveTop, this.data.moveLeft);
  },
  /**
   * 手指触摸后移动
   */
  touchmove(e) {
    let td = this.data;
    let moveTop = e.touches[0].pageY;
    let moveLeft = e.touches[0].pageX;

   

   
    if (moveTop <= td.moveHeight / 2) { // 判断可拖拽的最顶部
      this.setData({
        moveTop: td.moveHeight / 2
      })
    }else if (moveTop + td.moveHeight / 2 >= td.maxHeight) { // 判断可拖拽的最底部
      this.setData({
        moveTop: td.maxHeight - td.moveHeight / 2
      })
    }else if (moveLeft <= td.moveWidth / 2) { // 判断可拖拽的最左部
      this.setData({
        moveLeft: td.moveWidth / 2
      })
    }else if (moveLeft + td.moveWidth / 2 >= td.maxWidth) { // 判断可拖拽的最右部
      this.setData({
        moveLeft: td.maxWidth - td.moveWidth / 2
      })
    }else {
      this.setData({
        moveTop,
        moveLeft
      })
    }
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
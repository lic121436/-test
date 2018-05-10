// page/test13/test13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollIndex: 0,  // 当前页面索引值
    marginLeft: 0,    // 滑动下拉距离
    totalNum: 5,     // 总共页面数
    startX: 0,       // 开始的位置y
    endX: 0,         // 结束的位置y
    critical: 100    // 翻页的临界值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  tab(e){
    this.setData({
      scrollIndex: e.currentTarget.dataset.scrollindex
    });
  },
  scrollTouchStart(e) {
    let px = e.touches[0].pageX;
    this.setData({
      startX: px
    })
  },
  scrollTouchMove(e) {
    let px = e.touches[0].pageX;
    let d = this.data;
    this.setData({
      endX: px,
    });
    if (px - d.startX < d.critical && px - d.startX > -d.critical) {
      this.setData({
        marginLeft: px - d.startX
      });
    }
  },
  scrollTouchEnd(e) {
    let d = this.data;
    if (d.endX - d.startX > d.critical && d.scrollIndex > 0) {
      this.setData({
        scrollIndex: d.scrollIndex - 1
      });

    } else if (d.endX - d.startX < -d.critical && d.scrollIndex < d.totalNum - 1) {
      this.setData({
        scrollIndex: d.scrollIndex + 1
      });
    }
    this.setData({
      startX: 0,
      endX: 0,
      marginLeft: 0
    })
  }
})
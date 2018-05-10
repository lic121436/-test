Page({
  data: {
    result: '',
    val:''
  },
  scanCode: function () {
    var that = this
    wx.scanCode({
      success: res => {
        console.log(res);
        that.setData({
          result: res.result
        })
      },
      fail: res => {
        console.log(res);
      },
      complete: res => {
        console.log(res);
      }
    })
  },
  bindValSelect(e){
    let val = e.target.dataset.val;
    this.setData({
      val: val
    })
  }
})

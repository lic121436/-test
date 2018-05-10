const util = require('../../utils/util.js');
const dateTimePicker = require('../../utils/dateTimePicker.js');
Page({
  data: {
    test: '',
    testList: ['列表内容1', '列表内容2', '列表内容3', '列表内容4'],
    showFalg: false,
    showActive: '',

    btnDisabled: true,


    dateTimeArray: null,  // 日期时间picker
    dateTime: null,       // 日期时间picker
    startYear: 2018,      // 日期时间picker
    endYear: 2050,        // 日期时间picker
    deadline: null // 截止时间


  },
  onLoad(e) {

    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj.dateTimeArray.pop();
    var lastTime = obj.dateTime.pop();

    this.setData({
      dateTimeArray: obj.dateTimeArray,
      dateTime: obj.dateTime,
    });


    this.setTime(7)


    let arr = [];

    this.data.testList.map((item) => {
      if (item === '列表内容1') {
        item = "修改过的列表内容"
      }
      arr.push(item);
    })

    this.setData({
      testList: arr
    })
    console.log(this.data.testList);


  },

  setTime(num) {

    let selectTime = this.data.dateTimeArray[0][this.data.dateTime[0]] + '-'
      + this.data.dateTimeArray[1][this.data.dateTime[1]] + '-'
      + this.data.dateTimeArray[2][this.data.dateTime[2]] + 'T'
      + this.data.dateTimeArray[3][this.data.dateTime[3]] + ':'
      + this.data.dateTimeArray[4][this.data.dateTime[4]];

    // console.log(selectTime);

    let setTime = new Date();
    selectTime = new Date(selectTime);
    // console.log(setTime);
    // console.log(selectTime);

    let deadline = (new Date(selectTime)).getTime() + num * 24 * 3600 * 1000;

    // console.log(deadline);
    // console.log(typeof (deadline));
    // console.log(typeof (1525771002916));
    let time = new Date(deadline);

    deadline = util.formatTime(time).slice(0, 16).replace(/\//g, '-');

    this.setData({
      deadline
    });
  },

  /**
   * 打开下拉
   */
  showDown(e) {
    this.setData({
      showFalg: true
    })
  },
  /**
   * 选择下拉内容
   */
  clickSelect(e) {
    let content = e.target.dataset.content;
    let idx = e.target.dataset.idx;
    this.setData({
      test: content,
      showFalg: false,
      showActive: idx
    })
  },
  /**
   * 关闭下拉
   */
  closeDown(e) {
    this.setData({
      showFalg: false
    })
  },

  /**
   * 文本框输入内容时将按钮设置为可用
   */
  textareaChange(e) {
    let len = e.detail.value.length;
    if (len > 0) {
      this.setData({
        btnDisabled: false
      })
    }else{
      this.setData({
        btnDisabled: true
      })
    }
  }
})
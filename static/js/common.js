export default {
  // 清除所有timeout
  clearAllTimeouts() {
    var id = setTimeout(function () { }, 0);
    while (id > 0) {
      clearTimeout(id);
      id--;
    }
  },
  // 清除所有Interval
  clearAllInterval() {
    var id = setInterval(function () { }, 0);
    while (id > 0) {
      setInterval(id);
      id--;
    }
  },
  // 防抖动
  debounce(fn, delay) {
    var timer = null; // 声明计时器
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay || 1000);
    };
  }
};

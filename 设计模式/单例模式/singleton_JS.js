const Singleton = (() => {
  let instance;
  function createInstance() {
    return { name: "全局工具" };
  }
  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})(); // 已经被执行的函数，所以Singleton是一个函数重命名。
const a = Singleton.getInstance(); // 第一次执行函数   instance被创立
const b = Singleton.getInstance(); // 第二次执行函数   instance已经存在，返回instance
console.log(a === b); // true

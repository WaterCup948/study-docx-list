// 计时装饰器
function timer(fn) {
  return function (...args) {
    const start = Date.now();
    // 执行原函数
    const res = fn.apply(this, args);
    console.log(`耗时：${Date.now() - start}ms`);
    return res;
  };
}

function sum(a, b) {
  return a + b;
}

// 包装
const sumWithTimer = timer(sum);
console.log(sumWithTimer(1, 2));

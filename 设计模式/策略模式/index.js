"use strict";
// Record<K, T> 是 TS 内置工具类型，作用：构造一个对象类型，键的类型为 K，值的类型统一为 T。
const payStrategies = {
    wechat: (money) => console.log(`微信支付${money}`),
    alipay: (money) => console.log(`支付宝支付${money}`),
    bank: (money) => console.log(`银行卡支付${money}`),
};
// 调用
function pay(type, money) {
    payStrategies[type](money);
}
pay("alipay", 100);
pay("wechat", 200);

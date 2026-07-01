"use strict";
class Singleton {
    static instance;
    constructor() { } // 私有构造
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
// const a = new Singleton()  // 报错，因为构造函数是私有的，无法调用
const b = Singleton.getInstance();
const c = Singleton.getInstance();
console.log(b === c);

"use strict";
// 具体产品
class IPhone {
    call() {
        console.log("苹果手机打电话");
    }
}
class MiPhone {
    call() {
        console.log("小米手机打电话");
    }
}
// 简单工厂
class PhoneFactory {
    static create(type) {
        switch (type) {
            case "apple":
                return new IPhone();
            case "xiaomi":
                return new MiPhone();
        }
    }
}
// 使用
const p = PhoneFactory.create("apple");
p.call();

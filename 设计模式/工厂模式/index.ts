// 产品接口
interface Phone {
  call(): void;
}

// 具体产品
class IPhone implements Phone {
  call() {
    console.log("苹果手机打电话");
  }
}
class MiPhone implements Phone {
  call() {
    console.log("小米手机打电话");
  }
}

// 简单工厂
class PhoneFactory {
  static create(type: "apple" | "xiaomi"): Phone {
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

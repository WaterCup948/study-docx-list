// 被观察者（主题）
class Subject {
  constructor() {
    // 存储所有订阅的观察者
    this.observerList = [];
  }

  // 订阅：添加观察者
  addObserver(observer) {
    this.observerList.push(observer);
  }

  // 取消订阅：移除观察者
  removeObserver(observer) {
    this.observerList = this.observerList.filter((item) => item !== observer);
  }

  // 通知所有观察者更新
  notify(message) {
    this.observerList.forEach((observer) => observer.update(message));
  }
}

// 观察者基类
class Observer {
  update(msg) {
    throw new Error("子类必须重写update方法");
  }
}

// 具体观察者A
class UserA extends Observer {
  update(msg) {
    console.log("用户A收到消息：", msg);
  }
}

// 具体观察者B
class UserB extends Observer {
  update(msg) {
    console.log("用户B收到消息：", msg);
  }
}

// ================= 使用示例 =================
// 1. 创建主题（公众号）
const officialAccount = new Subject();

// 2. 创建两个订阅用户
const user1 = new UserA();
const user2 = new UserB();

// 3. 用户订阅公众号
officialAccount.addObserver(user1);
officialAccount.addObserver(user2);

// 4. 公众号发布文章，自动通知所有人
officialAccount.notify("前端设计模式更新啦！");
/* 输出：
  用户A收到消息：前端设计模式更新啦！
  用户B收到消息：前端设计模式更新啦！
*/

// 5. 用户A取消订阅
officialAccount.removeObserver(user1);

// 6. 再次发布消息，只有用户B接收
officialAccount.notify("观察者模式代码示例已更新");
/* 输出：
  用户B收到消息：观察者模式代码示例已更新
*/
// 手写实现Vue.js的数组、对象响应式监听
// 利用Object.defineProperty(obj, prop, descriptor)实现
// 参数列表：
// obj：需要定义属性的对象
// prop：需要定义的属性
// descriptor：属性的描述描述符
// 返回值：返回此对象

// 基本流程：遍历为数组、对象的每一个值、属性进行绑定监听函数，
// 为每个属性分配一个订阅者集合的管理数组dep；然后在编译的时候在该属性的数组dep中添加订阅者
// 当值改变的时候，就会通知更新，作为发布者发出通知
// 将事件发送给dev中存储的对应订阅者watcher，并调用对应的update方法更新视图

let obj = {
  name: "iwan",
  age: 25,
  subject: {
    name: "math",
    score: 80,
  },
  city: ["山西", "上海"],
};

function observe(target) {
  // 不是对象或者数组直接返回
  if (typeof target !== "object" || typeof target === null) return target;
  // 如果是数组则需要更改原型
  if (Array.isArray(target)) {
    let arrPrototype = Array.prototype;
    const arrProto = Object.create(arrPrototype);
    target.forEach((methodName) => {
      arrProto[methodName] = function () {
        arrPrototype[methodName].call(this, ...arguments);
      };
    });
  }

  for (let key in target) {
    // 遍历
    defineProperty(target, key, target[key]);
  }
}

function defineProperty(target, key, value) {
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        update(value, newValue);
        //通知更新，作为发布者发出通知，
        // 实际中会将事件发送给dev中存储的对应watcher，并调用对应的update方法更新视图
        value = newValue;
        observe(newValue); //当新值赋值为对象时, 对该对象绑定监听
      }
    },
  });
}

function update(oldValue, newValue) {
  //模拟更新操作
  console.log(`oldValue: ${oldValue}, newValue: ${newValue}`);
}

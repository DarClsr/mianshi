// 打印出 1~10000 以内的对称数

function Symmetry(min, max) {
  let result = [];
  let num = min;

  while (num < max) {
    let str = num.toString();
    if (str === str.split("").reverse().join("")) {
      result.push(num);
    }
    num++;
  }

  return result;
}

const res = Symmetry(1, 10000);

// 实现一个字符串匹配算法 indexOf

const name = "iwan";

// char 搜索的字符串  position 起始位置
String.prototype.newIndexOf = function (char, postion = 0) {
  let str = this.toString().split("");

  let length = str.length;

  let index = -1;

  for (let i = postion; i < length; i++) {
    if (str[i] === char) {
      index = i;
      break;
    }
  }

  return index;
};
const i = name.indexOf("a", 1);
const ni = name.newIndexOf("a", 1);

// 请实现一个模块 math，支持链式调用 math.add(2,4).minus(3).times(2);

class math {
  constructor() {
    this.num = 0;
  }

  add(a, b) {
    this.num = a + b;
    return this;
  }

  minus(a) {
    this.num = this.num - a;
    return this;
  }

  times(a) {
    this.num = this.num * a;
    return this;
  }
}

const n_math = new math();

n_math.add(2, 4).minus(1).times(2);
// console.log(n_math.num);

// 手写用 ES6proxy 如何实现 arr[-1] 的访问（滴滴 2020）

let arr = [1, 5, 3];

const proxy = new Proxy(arr, {
  //设置 属性
  set: (target, key, value, receiver) => {
    console.log("set的key为 ===>" + key, value);
    return Reflect.set(target, key, value, receiver);
  },
  //获取 属性  target 原来对象  key key或者索引
  get: (target, key, receiver) => {
    console.log("get的key为 ===>" + key);
    if (key < 0) {
      return target[target.length + parseInt(key)];
    }
    return Reflect.get(target, key, receiver);
  },
});

console.log(proxy[-1]);

//有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）

let arr1=[11,42,23,4,5,6,4,5,6,11,23,42,56,78,90]


//先计算出数组之和 

const partitionToThreeEqualSums=(arr)=>{
    
    const sortList=arr.sort((a,b)=>a-b);

    console.log({
        sortList
    })



    // 存储结果
    let result=[[],[],[]];

    //每个数组求和 
    let sum=[0,0,0];

    for(let num of arr){
        
        // 获取当前那个数组的和最小
        const minIndex=sum.indexOf(Math.min(...sum));

        // 找到最小数组的索引 并且添加元素
        result[minIndex].push(num);

        // 更新当前数组的和
        sum[minIndex]+=num;
       

    }

    return result
}


 let result=partitionToThreeEqualSums(arr1)

 console.log({
    result
 })




//before(num,fn)接受两个参数，第一个参数是数字，第二个参数是函数，调用before函数num次数以内，返回与fn执行相同的结果，超过num次数返回最后一次fn的执行结果。

function before(num, fn) {
  let count = 0;

  let res;

  return function (...args) {
    if (count < num) {
      res= fn(...args);

    }
    count++;
    return res;
  };
}

let fn = (x) => {
  return 2 * x;
};

const beforeFn = before(2, fn);

console.log(beforeFn(2));
console.log(beforeFn(4));
console.log(beforeFn(3));

// 产生一个不重复的随机数组;

function getRandomArray(length, min, max) {
  if (length > max) {
    throw "length 不能小于 max";
  }

  let arr = [];

  while (arr.length < length) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
  }

  return arr;
}

const list = getRandomArray(10, 1, 55);

console.log(list);

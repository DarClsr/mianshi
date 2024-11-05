//  产生一个不重复的随机数组
/**
 * @param {number} length  生成数组的长度
 * @param {number} min   数组元素的最小值
 * @param {number} max   数组元素的最大值
 */
function getRandomArray(length, min = 0, max = 100) {
  let arr = [];

  if (length > max) {
    throw "length 不能大于 max";
  }

  while (arr.length < length) {
    //获取随机数  随机数必须大于等于min 小于等于max  然后判断是否重复
    let num = Math.floor(Math.random() * (max - min + 1) + min);

    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
  }

  return arr;
}

// const new_list = getRandomArray(10, 1, 10);

// console.log(new_list);

//  async await 如何实现

// 使用递归完成 1 到 100 的累加

const addNum = (length, i = 0, result = 0) => {
  result = result + i;

  if (i < length) {
    i++;
    result = addNum(length, i, result);
  }
  return result;
};

// const res = addNum(100);

// console.log({
//   res,
// });





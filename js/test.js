// Map 场景题

let data = [
  {
    name: "可乐",
    categories: ["热门", "饮料"],
  },
  {
    name: "苹果",
    categories: ["热门", "食物"],
  },
  {
    name: "洗衣液",
    categories: ["生活用品"],
  },
];

const main = () => {

  let res=[]
  const map = new Map();

  data.forEach((item, index) => {
    const { name, categories } = item;

    categories.forEach((keyWord, index) => {
      if(!map.has(keyWord)){
        map.set(keyWord, [item.name]);
      }else{
        map.get(keyWord).push(item.name);
      }
    });
  });

  map.forEach((val, key) => {
    res.push({ name: key, categories: val });
  });
  return res;
};

console.log(main())

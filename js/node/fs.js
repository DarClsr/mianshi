const fs=require("fs");


// 读取文件

const txt=fs.readFileSync("./index.md","utf-8");



const new_text=fs.writeFileSync("./new_txt.txt","new txt",'utf-8')




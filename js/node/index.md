
## nodejs 是什么

#### javascript 的运行时 非阻塞异步I/O  chrome v8引擎 事件驱动

* 非阻塞io 

   *  callback 不会造成卡顿  再执行回调里面执行

* 事件驱动 

   * 事件队列

      *  同步事件
      *  异步事件 -> io  cb 加入事件队列



## nodejs 优缺点

* 高并发

* 适合i/o 密集型的应用 （事件驱动型）

* 不适合cpu 密集型 应用 单线程 （单核cpu）

* 代码发生问题 系统会发生崩溃


## nodejs的应用场景

* 内部不需要做非常复杂的逻辑
* websocket 聊天
* 高并发
* 单页面浏览器应用创建服务


## node fs模块

 * 操作文件夹文档

 r 读取文件
 r+ 读取并且写入文件
 rs 

 w 写入文件
 w+ 读取并且写入文件 不存在创建文件 存在清空后写入

 a 追加写入
 a+ 不存在 支持创建

 ** 写入

 ```js
 
 const fs=require("fs");


// 写入文件
 fs.writeFileSync("1.txt",'hello');

 // 读取文件
 const data=fs.readFileSync("1.txt",'utf-8');

 //追加文件

 fs.appendFileSync("1.txt",'world')

// 拷贝文件
 fs.copyFileSync("1.txt","2.txt")

 //创建目录
 fs.mkdirSync("txts")

 // 读取目录
 fs.readdirSync("txts")

 //删除文件夹
 fs.statSync("txts")

// 删除文件
 fs.unlinkSync("1.txt")
 
 ```







 


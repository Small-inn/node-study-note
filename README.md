#### nodeJS
---

* event-loop
* I/O

---

1. 进程
  > 计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位(简单来讲，就是为程序分配资源的，调度算法)

2. 单线程
  > 单线程只是针对主进程，I/O操作系统底层多线程调度

3. 常见场景
  * web sever
  * 本地代码构建
  * 实用工具的开发

4. 环境
  * CommonJS(nodejs模块管理的规范)
  * global
  * process

5. require
  * /表示绝对路径，./表示对于当前文件的
  * 支持js、json、node拓展名，不写名依次尝试
  * 不写路径测认为是build-in模块或者node_modules内的第三方模块
  * module被加载的时候执行，加载之后缓存
  * 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出

6. exports与module.exports
  * exports = module.exports, 但是不可以修改exports的指向

7. global
  * commonJS、Buffer、process、console、timer

8. process(进程)

9. 调试
  * inspector

10. RPC调用
  * Remote Procedure Call（远程过程调用）
  * 与Ajax的相同点
    - 都是两个计算机之间的网络通信
    - 需要双方约定一个数据格式
  * 与Ajax的不同点
    - 不一定使用DNS作为寻址服务
    - 应用层协议一般不使用HTTP
    - 基于TCP或UDP协议
  * 寻址/负载均衡
    - Ajax: 使用DNS进行寻址
  * TCP通信方式
    - 单工通信
    - 半双工通信 （轮番单工通信）
    - 全双工通信
  * 二进制协议
    - 更小的数据包体积
    - 更快的编解码速率
  
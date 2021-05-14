# Javascript-QA

## Reference
- Refer to https://lgwebdream.github.io/FE-Interview/javascript/#javascript%E9%9D%A2%E8%AF%95%E9%A2%98  
- Refer to wechat app: 高级前端面试  
- Refer to Professional JavaScript for Web Developers, 4th edtion

## Notes From Books
#### 关键字
var/let/const
- var: 包含它的函数的局部变量，退出时被销毁
声明提升(hoist)：
```javascript
function foo() {
	console.log(age);
	var age = 26;
}
foo(); // undefined
```
被认为是
```javascript
function foo() {
	var age;
	console.log(age);
	age = 26;
}
foo(); // undefined
```
支持重复声明

- let: 与var最大的区别就是，let的作用域是块作用域，var是函数作用域。块作用域是函数作用域的子集。不支持重复声明，会报错。

**暂时性死区(temporal dead zone)**
```javascript
// name 会被提升
console.log(name); // undefined
var name = 'Matt';
// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26;
```
**全局声明**  
与var不同，let在全局作用域的声明不会变成window对象的属性，而var会。
```javascript
var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
```
**条件声明**  
不要用let使用条件声明，它是一种反模式，让代码变的难以理解，一定有更好的声明方式。

**for循环中的声明**
```javascript
for (var i = 0; i < 5; ++i) {
setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出0、1、2、3、4
// 实际上会输出5、5、5、5、5
```
之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值
```javascript
for (let i = 0; i < 5; ++i) {
setTimeout(() => console.log(i), 0)
}
// 会输出0、1、2、3、4
```
在使用let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。
每个setTimeout 引用的都是不同的变量实例
- const: 基本与let相同。不同的地方不可用const在for循环中做迭代变量

**代码风格**  
尽量不使用var，只剩下const或者let。const > left。  

####执行上下文  
Brief Image:
![image](https://github.com/fqingyu/Javascript-QA/blob/main/images/ContextExcutionBrief.png)

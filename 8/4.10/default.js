
var len = (function rest(name, ...args){ }).length;
console.log("剩余参数", len);	//1
len = (function rest(name, age = 28){ }).length;
console.log("默认参数", len);	//1
len = (function rest(name, age = 28, school){ }).length;
console.log("默认参数", len);	//1
var x = 1,
  y = 2;
[x, y] = [y, x];	//数组解构

// var tmp = x;	//传统做法
// x = y;
// y = tmp;

console.log(x, y); //2 1


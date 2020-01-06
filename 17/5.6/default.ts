
interface Func {
  (str: string, digit: number): boolean;
}

// let exist: Func;
// exist = function(name: string, age: number): boolean {
  // return true;
// }

let exist: Func;
exist = function(name, age) {
  return true;
}

exist("strick", 28);
//exist(28, "strick");
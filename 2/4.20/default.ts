
function func<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
func({a: 1}, "a");		//正确
func({a: 1}, "b");		//错误

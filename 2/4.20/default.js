function func(obj, key) {
    return obj[key];
}
func({ a: 1 }, "a"); //正确
func({ a: 1 }, "b"); //正确

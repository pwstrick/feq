
interface Person {
  (name: string): boolean;
  age: number;
  getAge(): number
}

let worker = <Person>function(name: string): boolean {
  return true;
}
worker.age = 28;
worker.getAge = function() {
  return this.age;
};
//worker.school = "strick";		//Property 'school' does not exist on type 'Person'.

console.log(worker.getAge());
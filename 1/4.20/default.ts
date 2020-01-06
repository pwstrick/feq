
class Person {
  name: string;
  static age: number;
  constructor(name: string) {
    this.name = name;
  }
}

let people: typeof Person = Person;
people.age = 28;
console.log(people.age);

let worker: Person = new people("strick");
console.log(worker.name);


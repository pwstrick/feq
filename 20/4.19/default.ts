
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Programmer extends Person {
  constructor(name: string) {
    super(name);
  }
}

class Teacher {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}


let person = new Person("strick");
let programmer = new Programmer("freedom");
let teacher = new Teacher("justify");

person = programmer;
//person = teacher;
//programmer = person;

//console.log(typeof Person);
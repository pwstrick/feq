
class Person {
  name: string;
}
class Programmer {
  work() { }
}
class Man implements Person, Programmer {
  //Person
  name: string = "strick";
  //Programmer
  work: () => void;
}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}
applyMixins(Man, [Person, Programmer]);
let man = new Man();
console.log(man.name, man.work());






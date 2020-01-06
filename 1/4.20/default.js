var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var people = Person;
people.age = 28;
console.log(people.age);
var worker = new people("strick");
console.log(worker.name);

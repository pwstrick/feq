var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.work = function () { };
    return Programmer;
}());
var Man = /** @class */ (function () {
    function Man() {
        //Person
        this.name = "strick";
    }
    return Man;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
applyMixins(Man, [Person, Programmer]);
var man = new Man();
console.log(man.name, man.work());

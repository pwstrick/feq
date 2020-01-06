var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name) {
        return _super.call(this, name) || this;
    }
    return Programmer;
}(Person));
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    return Teacher;
}());
var person = new Person("strick");
var programmer = new Programmer("freedom");
var teacher = new Teacher("justify");
person = programmer;
//person = teacher;
//programmer = person;
console.log(typeof Person);

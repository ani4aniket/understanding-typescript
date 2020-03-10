"use strict";
var Person = (function () {
    function Person(n) {
        this.age = 20;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Aniket');
user1.greet('HI there I am');
//# sourceMappingURL=interface.js.map
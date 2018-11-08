"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello\nFirst Name: " + this.firstName + "\nLast Name:  " + this.lastName + "\nAge:  " + this.age);
    };
    Customer.prototype.GetAge = function () {
        console.log("Called GetAge() function\nAge: " + this.age);
    };
    return Customer;
}());
exports.Customer = Customer;

"use strict";
var _a;
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
level = 1;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let nums = [];
numbers.forEach(n => n.toString);
let user = [1, 'User1'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (income > 7 && (taxYear || 2022) > 2000)
        return income * 3;
    return 5;
}
calculateTax(4300, 2016);
let employee = {
    id: 1,
    name: 'gaurav',
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = {
    id: 1,
    name: 'gaurav',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
console.log(kgToLbs('10Kg'));
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
function getCustomer(id) {
    return (id === 0) ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => console.log(message);
log('a');
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map
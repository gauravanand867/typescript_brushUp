let age: number=20;
if(age<50)
    age+=10;
console.log(age);

/*
DATA TYPES
JS ->
number
string
boolean
null
undefined
object

TS extends->
any
unknown
never
enum
tuple
*/

let sales=123_456_789;
let course='Typescript';
let is_published=true;

//any
let level;
level=1;

// Function
function render(document:any){
    console.log(document);
}

//Array
let numbers=[1,2,3];
let nums: number[]=[];

//Autocomplete
numbers.forEach(n => n.toString)

//Tuples
//Fixed length array where each elment has particular type
let user: [number, string]=[1, 'User1'];
// user[1].  -> gives auto complete fuction suggestion

//Enums
//List of related content
enum Size{Small=1, Medium=2, Large=3};
 const enum Size1{Small=1, Medium=2, Large=3};
 let mySize=Size.Medium;
 console.log(mySize);

 //Function
 function calculateTax(income:number, taxYear?:Number):number{
    if(income>7 && (taxYear || 2022)>2000)
    return income*3;

    return 5;
 }

 calculateTax(4300, 2016);

 //Object

 let employee: {
    readonly id:number,
    name?:string,
    retire: (date:Date) => void
 }={
    id:1,
    name:'gaurav',
    retire:(date: Date) => {
        console.log(date);
    }
};

//Type alias
type Employee={
    readonly id:number,
    name?:string,
    retire: (date:Date) => void
}

let employee1 : Employee={
    id:1,
    name:'gaurav',
    retire:(date: Date) => {
        console.log(date);
    }
}

//Union Types
//Functions of more than one type
function kgToLbs(weight: number | string):number{
    //Narrowing
    if(typeof weight === 'number')
        return weight*2.2;
    else
        return parseInt(weight)*2.2;
    
}

kgToLbs(10);
console.log(kgToLbs('10Kg'));

//Intersection type
//Both type at a time
let weight: number & string;

type Draggable={
    drag:()=>void
}

type Resizable={
    resize:()=>void
};

type UIWidget=Draggable & Resizable;

let textBox:UIWidget={
    drag:()=>{},
    resize:()=>{}
}

//Literal types (exact or specific)
type Quantity=50 | 100;
let quantity:Quantity=100;

type Metric= 'cm' | 'inch';


//Nullable types
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
        else
        console.log('Hola!');
}
greet(null);


//Optional Chaining
type Customer={
    birthday?: Date
};

function getCustomer(id:number): Customer | null | undefined{
    return (id===0)?null:{birthday:new Date()};
}

let customer=getCustomer(0);
// if(customer !== null && customer !== undefined)
// console.log(customer.birthday);

//Optional Property access operator

console.log(customer?.birthday?.getFullYear());

//Optional Element access operator
// customer?.[0]

//Optional Call
let log: any=(message:string)=> console.log(message);
log('a');
// let log:any=null;
log?.('a');
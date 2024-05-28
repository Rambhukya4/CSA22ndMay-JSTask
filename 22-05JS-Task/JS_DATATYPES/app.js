/*
JS Data Types;
Types of data which we can assign to a variable
1)number-> any number
2)String-> any text(it should be within Quotes Ex: "", '', ``)
3)Boolean->True, false
4)Undefined
5)null
*/

//String
let employeeName=`ram`; //let-> does not indicate any datatype it just indicate a variable declaration
console.log(employeeName);
console.log(typeof employeeName); //mentioning typeof key to know what type of datatype it is
//or
console.log(`value:${employeeName} type:${typeof employeeName}`)

//number
let employeeAge=26;
console.log(`value:${employeeAge} type:${typeof employeeAge}`)

//boolean
let isManager = true;
console.log(`value:${isManager} type:${typeof isManager}`)

//undefined -> when we not assign any value to variable and trying to access then we get 'undefined' as a value
let name;//variable declaration;

console.log(`value:${name} type:${typeof name}`);

//null dayaType, (null object)
let test=null; //assign dummy value
console.log(`value:${test} type:${typeof test}`);

//bigint dayaType,
let bigIntValue = BigInt(2) ** BigInt(53);
console.log(bigIntValue); //bigint value it is grater then 2^53()
// to check type of above data
let abc;
abc=10;

console.log(`value:${abc} type:${typeof abc}`);






// Non-Primitive Data Types (Reference Types)
//object
let person = {
    name: 'ram',
    age: 45

    };
console.log(typeof(person))

// //array
// let fruits = [Apple, Banana, Cherry];
// console.log(fruits);

// //Function
// function greet(name) {
//     console.log('Hello,'+name+'!');
// }
// greet("Ram");







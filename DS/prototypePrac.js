// class Mobile {
//     constructor() {
//         this.camera = 30;
//         this.touch = true;
//     }
// }
// class Samsung extends Mobile{
//     constructor() {
//         super()
//         this.processor = 3.1;
//     }
// }
// Samsung.prototype = Object.create(Mobile.prototype)

// var mobile = new Mobile();
// var samsung = new Samsung();

// // samsung.color = 'white'
// // cl(Object.keys(samsung));
// // cl(Object.keys(mobile));

// /*

// Akshay pract

// */
// const arr = new Array()
// const obj = new Object();
// // cl(arr.__proto__.__proto__)
// // cl(Array.prototype)

// const object = {
//     name: 'Shoaib',
//     city: 'Lahore',
//     // getIntro: function ()  {
//     //     console.log(this.name + ' '+ this.city)
//     // }
// }
// let getIntro = function (area,province,country){
//     console.log(this.name + ' ' + this.city + ' from ' + area + ', ' + province + ' '+country);
// }
// const object2 = {
//     name: 'Shebi',
//     city:'Okara'
// }
// // object2.__proto__ = object;
// // object2.getIntro(object2.name,object2.city)

// // getIntro.call(object, 'gulshan park', 'punjab');
// // getIntro.apply(object2, ['gulshan park', 'punjab']);

// // let funcCpy = getIntro.bind(object, 'gulshan park', 'punjab') //same result
// let funcCpy = getIntro.bind(object,'gulshan park', 'punjab')
// // cl(funcCpy)
// funcCpy()
// // cl('-------')
// // let array = [1, 2, 3, 4,5,6,7,8]
// // cl(array.slice(1,4))
// // cl(array.slice(1,-2))
// // cl(array)

// Function.prototype.mybind = function (...args) {
//     let params = args.slice(1);
//     let obj = this;
//     return function (...in_args) {
//         obj.apply(args[0], [...params,...in_args])
//     }
// }
// let myintro = getIntro.mybind(object,'gulshan park','punjab')
// myintro('pakistan')

// console.log(mynameLet)
// let mynameLet = 'shebi'
// var myname='shoiab'

let obj = {
  name: "shoaib",
  age: 25,
};
let printName = function (area, code, city) {
  console.log(
    this.name + "  " + this.age + " " + area + " " + code + " " + city
  );
};

// Function.prototype.mybind = function (...args) {
//   console.log("this ", this);
//   let paramsExcludedOne = args.slice(1);
//   let callingFuncThis = this;
//   return function (...in_args) {
//     callingFuncThis.apply(args[0], [...paramsExcludedOne, ...in_args]);
//   };
// };

// let myname = printName.mybind(obj, "Gulshan park", "5400");
// myname("Lahore");

// Object.prototype.myhome = function (params) {
//   console.log("params ", this.name + " " + params);
// };
// obj.myhome("lahore");

function cl(arg) {
  console.log(arg);
}

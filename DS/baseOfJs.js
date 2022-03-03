// let a =10
// console.log('asdf')
// var a= 10;
// var a= 10;
// let a = 10;
// var b = 100;

// {
//     var a = 10;
//     let b = 10;
//     const c = 10;
// }

// function b() {
//     var a = 10
//     var c = 10
//     return;
// }
// b()
// console.log(a);

// function counter() {
//     var count=0;
//     this.increment = function() {
//         count++;
//         console.log(count)
//     }
//     this.decrement = function() {
//         count--;
//         console.log(count)
//     }
//     // const increment=() => {
//     //     count++;
//     //     console.log(count)
//     // }
//     // const decrement=() => {
//     //     count--;
//     //     console.log(count)
//     // }
//     return {increment,decrement}
// }
// const counter1 = counter();
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.decrement()

// for (let i = 0; i <= 5; i++){
//     setTimeout(() => {
//         console.log(i)
//         console.log('-')
//     },i*1000)
// }

// var a = 10;
// {
//     var a = 100;
//     let b = 100;
//     console.log(b)
// }
// {
//     var a = 200;
//     let b = 100;
//     console.log(b)
// }

// var x = 10;
// a();
// let bb = 2;
// b();
// // console.log(bb)
// console.log(x);
// function a() {
//   var x = 5;
//   console.log(x);
// }
// function b() {
//   console.log(bb);
// }
// // setTimeout(() => {
// //     console.log('ok')
// // },3000)
// console.log(x);

// if (a);

// function* myfunc() {
//     return yield 1;
// }
// console.log(myfunc())

// var obj = { a: 'a', b: 'b' };
// // var obj1 = { ...obj }
// // var obj1 = Object.assign({},obj)
// var obj1 = Object.create(obj)
// cl(obj)
// // obj1.a='abc'
// cl(obj)
// cl(obj1)
// cl(obj1.a)
// cl(obj1.b)

// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };
// const me = Object.create(person);
// cl(me);
// me.name = 'Matthew';
// me.isHuman = true;
// me.printIntroduction();

//--------------------------------------

// const obj = {
//     name: 'shoaib',
//     address: {
//         personal: {
//             zip: '2020',
//             area: 'Gulshan park',
//             near:'General Hospital'
//         },
//         office: {
//             zip: '2021',
//             area: 'Akbar chowk',
//             near:'College road'
//         }
//     }
// }
// var res_obj = {};
// function plainObj(obj,key) {
//     for (let i of Object.keys(obj)) {
//             if (i in obj && typeof obj[i] == 'object') {
//                 console.log(i,obj[i])
//                 plainObj(obj[i],key+'_'+i)
//             } else {
//                 res_obj[key +'_'+ i] = obj[i];
//             }
//         }
//     // return res_obj;
// }
// plainObj(obj,'user');
// console.log(res_obj)

// var a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// cl(a);

// function aout() {
//   {let myname = "khan";}
//   {var myname = "khan";}
//   console.log(myname);
// }
// aout();

//can't do this
var noOfBattles = "27";
let noOfBattles = "27";

function cl(param) {
  console.log(param);
}

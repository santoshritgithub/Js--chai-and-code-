let symn= Symbol("key1");

let obj ={
    email: "barnwalsantosh279@gmail.com",
    [symn] :"hello baby", //to access symbol 
    name: "santosh",
   " Full name": "santosh Prasad Barnawal",
    id: 123456
}
// console.log(obj.name);
// console.log(obj["name"]);
//console.log(obj. Full name); /* Generate error  so obj.element accessing way is not good way*/
// console.log(obj[" Full name"]);
// console.log(typeof obj[symn]); 

// obj.name="ashwin";
// console.log(obj);
// Object.freeze(obj);
// obj.name="ashwin vai";
// console.log(obj);
 
obj.greeting = function(){
    console.log("She is soo cute yrr..");
}
obj.greeting2 = function(){
    console.log(`${this.name}, she is soo cute yrr.. `);
}
console.log(obj.greeting());
console.log(obj.greeting2());

console.log(obj);


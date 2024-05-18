const tinder= new Object(); 
// console.log(tinder);
const tnder ={}

tnder.name ="Ashwin";
tnder.Id= "1231bc";

// console.log(tnder);

const obj1= { 1:"a", 2:"b"};
const obj2= { 3:"a", 2:"b"};
// const obj3 ={ obj1, obj2};
// const obj3 = Object.assign(obj1,obj2);
const obj3 = Object.assign({},obj1,obj2);
// const obj3 ={ ...obj1, ...obj2};// spreading technique to combine two objects
console.log(obj3);
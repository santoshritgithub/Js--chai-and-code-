console.log(Math.PI);
Math.PI= 34;
console.log(Math.PI);

console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

// try{
//     Object.defineProperties(Math, "PI",{
//         value: 50,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     });
// }
// catch(e){    //error detected  because Math.PI  has non-configurable nature.
//    console.log("Hero")
//    console.log(e)
// }


const newMath = Object.create(Math)

Object.defineProperty(newMath, "PI",{
 value: 50, 
 writable:true,
 enumerable:true,
 configurable:true
})
// console.log(Object.getOwnPropertyDescriptor(newMath,'PI'))
console.log(newMath.PI)

// Optional: If you want to use the new Math object globally, you can replace the original Math object
global.Math = newMath;

// Verify the change globally
console.log(Math.PI); // 50
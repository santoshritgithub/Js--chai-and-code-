// This part show the actual behind the scene of any const val such that why we can't change it
// And if we have to change how can change

/*
const chai = {
    name:"Ginger chai",
    price:250,
    isAvailable:true,

    orderChai: function(){
       console.log("Chai nhi bni");
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai ,"price"))
// const pric= chai.price=200;      //we can change price 
// console.log(pric)               //OUTPUT : 20

//set it having prroperty not to change
Object.defineProperty(chai, "price", {
    // writable:false,
    enumerable: false
})
// console.log(chai.price=2000)               //OUTPUT : 2000T

// console.log(Object.getOwnPropertyDescriptor(chai ,"price"))   //we can't change price value


for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function' ){
        console.log(`${key} : ${value}`)
    }
}
*/
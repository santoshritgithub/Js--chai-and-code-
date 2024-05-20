//Chain of map and filter is possible 
//let's explore a demo

let arr=[1,2,3,4,5,6,7,8,9,10]
let data = arr.map((num)=> num*10)
              .map((num)=> num+1)
              .filter((num)=> num>40)
console.log(data);
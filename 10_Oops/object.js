function add2(num){
    return num+2;
}
add2.power = 5
// console.log(add2.power)
// console.log(add2(9))
// console.log(add2.prototype)
// console.log(typeof add2.prototype)

function creatUser(username, price){
    this.username= username
    this.price = price
}
creatUser.prototype.increament= function(){
    this.price++;
}
const chai = creatUser("chai", 25)
const tea = creatUser("tea", 40)
console.log(chai)


console.log(addone(3));// execute properly
function addone(num){
    return num+1;
}

console.log(addtwo(3)); //Error: Cannot access 'addtwo' before initialization
const addtwo = function(val){
    return val+2
}
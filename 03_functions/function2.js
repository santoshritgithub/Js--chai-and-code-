function usual(val1){
    return val1;
}
console.log(usual(100));

function usual(...val1){ //rest ...  operater is used 
    return val1;
}
console.log(usual(100,200, 300));

const array =[ 1, 20, 400];
function arraydata(val){
  return (val[1]);
}
console.log(arraydata(array));

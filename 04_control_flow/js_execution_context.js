/* 
javascript execution context 
1. Global execution context
2. Function execution context
3. Eval execution context

*/
let month =Math.floor(Math.random()*4);
console.log(month)
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  default:
    console.log("Non the three first");
}

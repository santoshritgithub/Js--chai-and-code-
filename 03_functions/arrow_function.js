let val= ()=> {
    let name = "Hero";
    // console.log(name);
}
val();

// const data =(num1, num2)=> num1+num2 //in single line no need or return 
// const data =(num1, num2)=> (num1+num2) 
const data =(num1, num2)=> {
    // console.log(arguments);
    // return(num1+num2)   //required return to execute
}
data();
// console.log(data(2,5));

// imediately invoked function expression (IIFE)
// ()()
(function add(n1, n2) {  //named IIFE
    console.log(n1+n2)
})(2,9);

((name)=>{           //without name IIFE
    console.log(`chai and ${name}`)
})("code");
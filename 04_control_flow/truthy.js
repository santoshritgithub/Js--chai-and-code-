// let userid="bajaj@gmail.com"; //present string print if condition
// let userid=""; //Empty string print else condition
let userid=[]; ////Empty array print if condition
if(userid){
    console.log("yes userid present");
}
else{
    console.log("Not defiend");
}

//falsy value

// 0, NaN, -0, false, undefined, "", null , BigInt 0n

//Truthy value

//"0", 'false', [], " ",{}, function(){}

const obj={}
if(Object.keys(obj).length==0){
    console.log("yes empty");
}
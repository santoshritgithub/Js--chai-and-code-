let arr=[1,2,3,4];

// let total= arr.reduce(function(acc, val){
//     console.log(`acc: ${acc} & val ${val}`)
//     return acc+ val;
// },0)

//In arrow function
let total= arr.reduce((acc, val)=> acc + val,0)

// console.log(total);


//let explore an example
let shopping_cart=[
    {
        item:"js course",
        price:1999
    },
    {
        item:"python course",
        price:999
    },
    {
        item:"full stack course",
        price:10999
    },
    {
        item:"Data science course",
        price:12999
    },
]
// finding to course price using ***  reduce  ***
// let totalprice= shopping_cart.reduce((acc, val)=> acc+val.price,0)
                            // Output =   26996                               
let Total=0;
let totalprice = shopping_cart.map((val)=>{
    Total+= val.price;
    return Total
})
console.log(totalprice);   
                            //Output= [ 1999, 2998, 13997, 26996 ]
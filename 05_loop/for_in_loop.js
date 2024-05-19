// forin loop
// Note: forin use in basically to access 
//                                1) object component 
//                                2) also in array 

const obj={
    js:"javascript",
    cpp:"c++",
    css:"crystal style sheat"
}
for (const key in obj) {
    // console.log(`${key} :- ${obj[key]}`)
}

const Arr=["cpp","rb","js","c#"];
for (const key in Arr) {
    console.log(key, ":",Arr[key]);
}
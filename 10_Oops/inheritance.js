const teacher ={
    wearshorts: true
}
const ClassIncharge={
    cute: false
}
const Hod ={
    old:true,
    __proto__ : teacher   //teacher property is inherited to Hod
}
// ClassIncharge.__proto__ = Hod 
  //⬆️ can be also written as ⬇️
Object.setPrototypeOf(ClassIncharge, Hod)   //inheritance declaration method tyoeo two

// console.log(Hod.wearshorts)   //Output : true  
// console.log(ClassIncharge.old)  //Output : true  
// console.log(Hod.cute);  //Output : undefined
// console.log(ClassIncharge.wearshorts)  //Output : true  Here Hod object inherited teacher and ClassIncharge to Hod so teacher can access object of  classIncharge 


const name ="santosh    ";

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True lenght is ${this.trim().length}`)
}
name.trueLength();
"Abdul   ".trueLength();
" Ashwin  ".trueLength();
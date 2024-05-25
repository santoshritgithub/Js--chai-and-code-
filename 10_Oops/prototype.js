// let name = "Ashwin    ";
// console.log(name.length);
//                  // OUTPUT: 10 
// //but i want to have actual true length 
// console.log(name.trueLength);  // to define this let's understand behind the concept


let Heros= ["Thar", "Spiderman"];
let heropower={
    Thar:"hammer",
    spiderman:"sling",

    getheropower : function(){
        console.log(`Spider Power is ${this.spiderman}`);
    }
}
Object.prototype.santosh= function(){
    console.log("Yes santosh is present in all object");
}
//  heropower.santosh();
Heros.santosh();

Array.prototype.Heysantosh= function(){
    console.log("He says , hello santosh");
}
Heros.Heysantosh();
heropower.Heysantosh(); //Error expected because Array prototype doesnot define for object
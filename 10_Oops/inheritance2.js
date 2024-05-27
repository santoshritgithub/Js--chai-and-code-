class user{
    constructor(name){
        this.name = name;
    }
   logme(){
    console.log(`Name is ${this.name}`)
   }
}
class teacher extends user{
    constructor(name, password, id){
        super(name);
        this.password= password;
        this.id= id;
    }
    addcourse(){
        console.log(`New course is ${this.name}`)
    }
}
const js= new teacher("Js", "Js@gmail.com","2341");
js.addcourse();
js.logme();
const userJee = new user("hanji")
userJee.logme();

console.log(js instanceof teacher);    //OUTPUT: true
console.log(js===userJee);             //OUTPUT: false

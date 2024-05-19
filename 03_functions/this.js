const user={
    name:"Santosh",
    id:"123Abc",
    welcome: function(){
        // console.log(`${this.name}, like nonveg`)
        // console.log(this);
    }
}
// console.log(user.name)

user.welcome();
user.name="Ashwin";
user.welcome();
// console.log(this);

function chai(){
    let name="Sagar";
    console.log(this.name);// undefined
}
chai();
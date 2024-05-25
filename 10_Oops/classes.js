// class User{
//     constructor(username, Email){
//         this.username= username;
//         this.Email= Email
//     }
//      dataEntry(){
//             return `Username is ${this.username} Barnawal`
//     }
//     ChangeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const data = new User("Santosh", "barnwalsantosh279@gmail.com");
// console.log(data.dataEntry())
// console.log(data.ChangeUsername())



//other way to do same work without function

function user(name, email){
    this.name= name;
    this.email= email;
}
user.prototype.Identifyname= function(){
    return `Name is ${this.name.toUpperCase()}`
}
const data = new user("Ashwin","2822063.cse@pietgroup.co.in")
console.log(data.Identifyname())
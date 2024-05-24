const user ={
    username: "Ashwin",
    visited : true,
    count : 8,
    getUserDetail : function(){
        // console.log("Got user detail from database");
        console.log(`username is ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username)
// user.getUserDetail()
// console.log(this);

function User(username, visited, count){
    this.my= username;
    this.visited = visited;
    this.count = count;
    this.greeting = function(){
        console.log(`Welcome ${this.my} G`)
    }
    return this
}


const visitor1 =new User("Ashwin", true, 45)
const visitor2 =new User("Santosh", false, 23)
console.log(visitor2)
console.log(visitor1)
// console.log(typeof visitor1)

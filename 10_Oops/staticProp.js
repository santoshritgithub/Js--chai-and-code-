 class user{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    static scanme(){   //static restrict ability to access
       console.log(`Id is 12345`)
    }
 }
 class teacher extends user{
    constructor(username, id){
        super(username)
        this.id= id;
    }
 }
 const data2 = new teacher("Ashwin","1234");
//data2.scanme();   //can't access because of static properties
const data1= new user("santosh")
//data1.logMe();    //can't access because of static properties
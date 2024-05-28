//Example one of call use

function SetUserName(userName){
    this.userName = userName;
}
 function CreateUser(username, password, id){
    SetUserName.call(this,username)    //Without using .call and this the SetUserName calls but actuall reference should not passed

    this.password= password;
    this.id = id;               
}

const chai = new CreateUser("Tarkeshwar","1234","DK")
console.log(chai);


//Example two of call use

function SetUserName(Name){
    this.Name= Name;
}
function ALLinOne(Name, price){
     SetUserName.call(this,Name)
      this.Price= price;
}
const Book = new ALLinOne("ABC","65");
console.log(Book);

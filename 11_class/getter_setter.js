// getter setter in class
class user{
    constructor(email, id){
        this.email= email;
        this.id= id;
     }
     get id(){
        return `${this._id} Radhe Radhe`
     }
     set id(val){
        this._id =val;
     }
     get email(){
        return `${this._email}`.toUpperCase()
     }
     set email(val){
        this._email =val;
     }

}
const Ashwin = new user("A@id", "9 2 11")
// console.log(Ashwin.id);
// console.log(Ashwin.email);

// getter setter in function
function User(email, id){
    this.email= email;
    this.id= id;
    Object.defineProperty(this, 'id',{
        get: function(){
            return this._id
        },
        set: function(val){
            this._id= val
        }
    })
}
const chai= new User("Santosh", "Abc123");
// console.log(chai.email);


// getter setter in Object

function User(email, id) {
    this.email = email;
    this._id = id;  // Store the value internally
    Object.defineProperty(this, 'id', {
        get: function() {
            return this._id;
        },
        set: function(val) {
            if (typeof val === 'string' && val.length > 0) {
                this._id = val;
            } else {
                console.log('Invalid ID');
            }
        }
    });
}

const chaia = new User("Santosh", "Abc123");
console.log(chaia._id);  // Abc123
chai.id = "";          // Invalid ID
// console.log(chaia._id);  // Abc123 (unchanged)

const coffee = Object.create(User);
console.log(coffee.email)
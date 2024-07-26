//object
const user = {
    name: "prince",
    age: 20,
    add: "nagpur"
} 

//function
user.call = function() {
    console.log(`hello, ${this.name} how are you?`);
}

user.call();

const User = {
    name: "prince",
    branch: "CSE",
    year: "4th",
    age: 20,
    login: function() {
        console.log(`hello, ${this.name} welcome to our website`);    
    }

}

User.login()
User.name = "sam"
User.login()
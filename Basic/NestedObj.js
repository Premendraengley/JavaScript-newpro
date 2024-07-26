// nested obj

const user ={
    name : "prince",
    add : {
        nagpur : {
            p1 : "JIT",
            p2 : "naniks"
        },

        sarni: {
            p1 : "pkd",
            p2 : "bagdona" 
        }
    },
    logIn : true
}

console.log (user.add);
console.log(user.add.nagpur);
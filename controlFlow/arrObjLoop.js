//how to make object on array 
// and how to access the objects form array

//array having the object
const userDetails = [
    {
        name : "prince",
        sername: "engley"
    },
    {
        name : "nishant",
        sername: "engley"
    },
    {
        name: "premendra",
        sername: "engley"
    }
]

//access
userDetails.forEach ((item) => {
    console.log(item.name);
    console.log(item.sername);
})
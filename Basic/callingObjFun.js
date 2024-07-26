//define obj
const userDetails = {
    userId : "123",
    name : "prince",
    add : "ngp",
    mobNo : 9875642315
}

//define funtion

//herei make the funtion 
//and access the object (there should be many objects in the file, so i use the name anyObject,
//so it will get accessed by the name of the keys of the objects)

function personalInfo (anyObject){
    console.log(`your user Id is ${anyObject.userId}`);
    console.log(`Hello, ${anyObject.name} welcome to our shop`);
}

//here i call the funtion (personalInfo)
//and passes the values on it
personalInfo({
    userId : "321",
    name : "Engley",
    })
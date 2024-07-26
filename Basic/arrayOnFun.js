//define array
const  userCost =  [20, 30, 10, 50]

//make funtion to access the values of the array
//it should be access by its index

function getvalue (anyIndex)
{
    return anyIndex[1]
}

//calling funtion and give the name of the array which you want to access
console.log(getvalue(userCost));
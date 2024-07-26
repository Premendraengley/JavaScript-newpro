// define normal fun()

// function calcu (num1)
// {
//     return num1
// }

// console.log(calcu(200));


//the thing is What happent if the user enter more than parameter value
//here i used the spread/Rest operator ...
function calcu(...num1) {
    return num1
}

console.log(calcu(20,21,52));
// it will stored the extra value into array
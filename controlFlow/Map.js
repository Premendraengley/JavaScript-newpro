// creating the map
const newMap = new Map()
newMap.set ('IN',"India")
newMap.set( 'HI',"HELLO")
newMap.set( 'LO',"LELO")
console.log(newMap);

//calling in loop
for (const key of newMap) {
    
    console.log(key);
}
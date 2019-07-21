/* 
Example 1  Array is  Object 
properties of Array can be accessed similar to  object  
*/

let obj1 = {};
let arrays1 = [];
console.log(arrays1 instanceof Array)
console.log(obj1 instanceof Object)
console.log(arrays1 instanceof Object)
/* 
Example 2  Access the properties of Arrays
properties of Array can be accessed similar to  object  and can be iterated similar to that of object
for loop is similar to Example 5 in learn-object.js
*/
let arraysOfNumber = [12,42,33,4,52];
for (let key in arraysOfNumber){
    console.log("Values in arrays at "+ key +" = "+ arraysOfNumber[key]);
  }
 /* 
Example 3  Push/Pop and Shift/Unshift in  Arrays
properties of Array can be accessed similar to  object  and can be iterated similar to that of object
for loop is similar to Example 5 in learn-object.js
*/ 

var data = [ "Z" ];
data.push( "A" );
data.push( "B", "C" );
console.log( "Push Data at End" );
console.log( data );

var data = [ "Z" ];
data.unshift( "A" );
data.unshift( "B", "C" );
console.log( "Unshift Data at Front" );
console.log( data );


var data = [ "A", "B", "C" ];
console.log( data.pop() );
console.log( "Pop Data at End" );
console.log( data );

var data = [ "A", "B", "C" ];
console.log( data.shift() );
console.log( "Shift Data at Front" );
console.log( data );


/* 
Push Data at End
["Z", "A", "B", "C"]
Unshift Data at Front
["B", "C", "A", "Z"]
C
Pop Data at End
["A", "B"]
A
Shift Data at Front
["B", "C"]

*/
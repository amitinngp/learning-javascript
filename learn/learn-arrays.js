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
 /* 
Example 4 - splice vs slice in  Arrays
*/ 
console.log("======splice======");
var data = ["1", "2", "3", "4"];
data.splice(2, 1, "5", "6");
console.log(data);

var data = ["1", "2", "3", "4"];
data.splice(2, 1);
console.log(data);

console.log("======slice======");
var data = ["1", "2", "3", "4"];
let newdata = data.slice(2, 3); // start from "3" but upto (3-2 =1 )1 element.
console.log(data);
console.log(newdata);

var data = ["1", "2", "3", "4"];
let newdata1 = data.slice(2); // start from "3" but upto no number mentioned then till end.
console.log(data);
console.log(newdata1);


 /* 
Example 5 - map vs reduce vs filter in  Arrays
map - to fetch computed value for every item in array,so that a new array having only values of required keys [ here for name] resulting with same length. 
reduce - single computed value for every item in array.
filter - filtered new array with all elements that pass the test 
*/ 

//map()
const numbers = [2, 4, 8, 10];
const double = numbers.map(function(x){ return x * 2;}); 
console.log(double);
//or with arrow function we will see that later
const double1 = numbers.map(x => x * 2);
console.log(double1);
var techstack = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'angular' },
    { id: 3, name: 'spring' },
    { id: 4, name: 'typescript' }
  ];
  const names = techstack.map(techstack => techstack.name)
  console.log(names);

//reduce
var reducetechstack = [
    { id: 1, name: 'javascript',score: 50 },
    { id: 2, name: 'angular' ,score: 60},
    { id: 3, name: 'spring' ,score: 70},
    { id: 4, name: 'typescript' ,score: 40}
  ];
  var totalscore = reducetechstack.reduce((total ,reducetechstack)=>  total += reducetechstack.score,0);
  console.log(totalscore);
  //filter
  var filtertechstack = [
    { id: 1, name: 'javascript',score: 50 },
    { id: 2, name: 'angular' ,score: 60},
    { id: 3, name: 'spring' ,score: 70}, 
    { id: 4, name: 'typescript' ,score: 40}
  ];
  var passingMarks = filtertechstack.filter((filtertechstack) =>  filtertechstack.score >= 50);
  console.log(passingMarks); 

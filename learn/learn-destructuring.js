
var name = "Hong Kong";
console.log(name instanceof Object)

var city = {district : "Wan Chai"}; //city is holding address to {city : district} in memory
console.log(city instanceof Object)
var obj = 
 {
    name: name,
    city: city
}
console.log(obj);
// above can be written as 
var obj =
 {
    name: name,
    city: {district : "Wan Chai"}
}
console.log(obj);
//exm -1
var {name:name ,city:city} = obj; //{name:[name in outer scope , which is available to this object otherwise it will become undefined]}
console.log({name:name ,city:city});
//exm -2
//As we can write a syntactical shortcut for when the property and variable names are the same
var {name,city} = obj;//{name  ,city} is anynomus object avilable in outer/global space[check for when outer and when global]
console.log(city);
////exm -1 and //exm -2  will have same o/p but both are not same.
//Here both {name:name ,city:city} and {name  ,city} are anynomus object, which is will hold the value with 
//same key available 
const person = {
    name: 'John Doe',
    country: 'Canada'
};

//const { name: fullname, country: place, age: years = 25 } = person;
const { name: fullname, country: place, age: years = 25 } = {name: 'John Doe',country: 'Canada'};
for(let key of Object.keys(person)){
     // if key matched 
     if(key.match({name:fullname})) {
        console.log(fullname)
     }
     
}

console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

let {height, width, title} = { title: "Menu", height: 200, width: 100 }
console.log(`I am ${title} from ${height} and I am ${width} years old.`);

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true    // something extra that we will not destruct
  };

  //let { size } = options; 
  let { size:size } = options; 
  console.log(size);//value part of printed here means second part in  size:size of key -value pairs.
  //let { size:fullsize } = options;
  //console.log(size); // what i am taking is value not key. so this will give error.
  //console.log(fullsize);

  //Key should match , order does not matter and does not matter how deep key is in object. 
  //

  //Default value
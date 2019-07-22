
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

  let [firstName,lastName] = ["John", "Doe"];
  console.log({firstName,lastName}) 

  let [firstName1,,lastName1] = ["John", "Middle Name","Doe"];
  console.log({firstName1,lastName1}); 

  
   const [red = 255, green, blue = 255] = [120]; // its will take fitrst item .
   console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 120, G: undefined, B: 255

   let [firstName2,lastName2] = [{lastName2 : "Doe"},{firstName2 : "John"}];
        console.log({firstName2,lastName2}); 
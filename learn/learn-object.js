(function(){
/* 
Example 1 Plain Object
*/
const pageModel = {
  name: 'my-app-ang',
  properties: {},
  children: [{
    name: 'MyComponent',
    properties: {
      componentId: 'MyComponent'
    }
  }, {
    name: "tag-0",
    properties: {
      name: 'ChildComponent',
      componentId: 'ChildComponent'
    }
  }],
};

pageModel.children.forEach(function(child){
  console.log(child.name) ;
  console.log(child.properties);
})
/* 
Example 2  Object with complex keys
creating objects with dynamic property names and computed key
*/
var someComputedvalue = false
var keyArray = ["name","address"] // This can be any dynamic computed value
var isComputedValue = someComputedvalue == true ? true : false
function getKey(keyArray) {
var value = ""
if(isComputedValue){
 value = keyArray[0]
}else{
  value = keyArray[1]
}
console.log(value);
return `${value}`;
}

const obj = {
id: 5,
[getKey(keyArray)]: "javascript"
};
console.log(obj) //{id: 5, address: "javascript"}
//or Another example we can create a function name on fly based on computed value
var isCumputedCurrentMatched = true ;// assuming its true
let accountType = isCumputedCurrentMatched == true ?'CurrentAccount':'SavingAccount';
let PersonAccount = {
 [accountType] : function(){
   var calacutedAccoutNumberBasedonLogic = '000000123456' //assuming its after calculating
   return calacutedAccoutNumberBasedonLogic
 }
}
if (isCumputedCurrentMatched){
console.log('do something with '+ PersonAccount.CurrentAccount()); // even tough we don't have 
                                            //CurrentAccount() in PersonAccount object at first we generated it on fly
}else {
console.log('do something with '+ PersonAccount.SavingAccount());
}
/* 
Example 3  Object with invalid keys
Only invalid identifiers should be in single quote
*/

const Obj = {
one: 1,
two: 2,
'three-key': 3, // it can not be three-key: 3 without quote its illigal.
};

/* 
Example 4  Property value shorthand
When we use both key and properties name with same value it can be written shorthand
*/
function notShortHand(){
const name = "CurrentAccount";
const accountNumber = "12344566788";
let UserAccount = function(){
  return {
    name: name,
    accountNumber: accountNumber,
    };
}
console.log(UserAccount().name);
}
// is similar to 
function shortHand(){
const name = "CurrentAccount";
const accountNumber = "12344566788";
let UserAccount = function(){
  return {
    name, // internally its a key-value pair with same value , like name:name or accountNumber:accountNumber
    accountNumber,
    };
}
console.log(UserAccount().name);
}
notShortHand();
shortHand();

/* 
Example 5  Accessing object key via for loop
It will print all the properties that an Object has 
*/
for (let key in pageModel){
console.log(key);
}

/* 
Example 6  Object as Const 
properties of const object can change  
*/

const checkAccount = {
  name:'Current Account'
};
checkAccount.accountNumber = "12345678987654"; // we can add more properties to object
console.log(checkAccount.accountNumber);
})()


# Learning JavaScripts (not basics)

## Prerequisites

Knowledge of javascripts basics

- "use strict"
- Variables
- Type Conversions
- Operators
- Comparisons
- Conditional operators: if, '?'
- Logical operators
- Loops: while and for
- The "switch" statement
- functions
- Lexical scope,Execution context(Hoisting)

## [Table of Contents](#table-of-contents)

1. [Objects](#objects)
1. [Arrays](#arrays)
1. [Destructuring](#destructuring)
1. [Arrow Functions](#arrow-functions)
1. [Data Types](#data-types)
1. [Classes & Constructors](#classes--constructors)
1. [Type Casting & Coercion](#type-casting--coercion)
1. [Iterators and Generators](#iterators-and-generators)
1. [Objects Properties](#object-properties)
1. [Prototypes and inheritance](#prototypes-inheritance)
1. [Error Handling](#error-handling)
1. [Promises, async/await](#promises-async-await)
1. [Modules](#modules)
1. [Template Literals](#teamplate-literals)

## Creating environment to run

### Prerequisites

1.  install [npm](https://www.npmjs.com/get-npm) and run below command

    > npm init

    and write according to your's environment , for example

- package name: [your package name]
- version: (1.0.0)
- description:
- entry point: (index.js)
- test command:
- git repository: [Path to your repository]
- keywords:
- author:
- license: (ISC)

2. Install [http-server](https://www.npmjs.com/package/http-server)
   > npm i http-server

### Run Project

Add below on scripts in package.json

```javascript
"scripts": {
   "postinstall": "",
   "update-deps": "npm update",
   "postupdate-deps": "",
   "prestart": "npm install",
   "start": "http-server -a localhost -p 9903 -o -c-1 ./learn", // ./learn  and port you can change
   "test": "echo \"Error: no test specified\" && exit 1"
 },
```

- > npm start

### Getting started

Understanding working of Javascripts underhood in Angular world.

### Objects

Objects in javascripts , let see the example and then deep dive into it.

> var person = {};

> var person = new Object(); // not very common

Object is a collection of **key : value** pairs and can inititalized using keyword **new** Object() or by using object literal **{}**

Key : value pairs can be any combination of key with:

- **Primitive** (type which is not an object) [undefined , null , boolean, number, string ,symbol]

```javascript
e.g.
 { "age" : 30 } , { isPrimitive: boolean}, {"name" : "javascript"}
 or
 {
        selector: 'pt-hello-app',
 }
```

- **Object**

```javascript
e.g.
    { "address" : {
            district: "Wan Chai"
            city: "Hong Kong"
        }
    }

    or

    {
        selector: 'pt-hello-app',
        template: '<my-root></my-root>',
        styles: ['themes/my-theme/scss/main.scss']
    }
```

- **Function**

person object  can all function using  person.call()

```javascript
e.g.
     var person = { "address" : {
            district: "Wan Chai"
            city : "Hong Kong"
            call : function({"phoneNumber": "+8523445678"}){}
        }
    }
    or
    RouterModule.forRoot([], { initialNavigation: false, useHash: true })
     where  RouterModule is object  and forRoot is function  something like below
     var RouterModule = {
         forRoot : function([],{}){

         }
     }
```

and each value pairs can hold another collections of key value pairs.

- **Object in Object**

  **address** object is within **person** object

```javascript
e.g
  var person = {
      name: "javascript",
      address: {
            district: "Wan Chai"
            city : "Hong Kong"
            call : function({"phoneNumber": "+8523445678"}){}
        }
  }
  or
    const pageModel = {
    name: 'pt-my-app-ang',
    properties: {}
}
```

- **Function in Object**
```javascript
var person = {
      name: "Javascript",
      address: {
            district: "Wan Chai"
            city : "Hong Kong"
            call : function() {
            }
        }
  }
var phoneNumber = {"phoneNumber": "+8523445678"}
person.call(phoneNumber)

or

var app = {
    bootstrap : function(pageModel){
    }
}
app.bootstrap(pageModel)
```

- **Array in Object**

```javascript
var listofpersons = {[
    {
      name: "javascript",
      address: {
            district: "Wan Chai"
            city : "Hong Kong"
            call : fuction({"phoneNumber": "+8523445678"}){}
        }
  },
  {
      name: "typescript",
      address: {
            district: "central"
            city : "Hong Kong"
            call : function({"phoneNumber": "+8523445679"}){}
        }
  }
]
};
or

const pageModel = {
    name: 'pt-my-app-ang',
    properties: {},
    children: [{
      name: 'MyComponent',
      properties: {
        classId: 'MyComponent'
      }
    }, {
      "name": "my-0",
      "properties": {
        "classId": "MyCustomComponent",
      }
    }],
  };
```
 In short , objects are used to store key-value collections of various data types with more complex structure.

 - Access Object

 Using . and [] accessor 
 Properties and Functions within object can be accessed using properties accessor **[]**  or **.**.
 Commonly **.** accessor is  used much than **[]**.Due to simple reason of complexity associated with the **[]**.
 But **[]** is also powerful on its own.Let say you want to compute the key value based on some input  then  **[]**
 accessor is very useful.For example,  you want to compute the account type key based on users choice 
 ```javascript
 let PersonAccount = {
   [accountType] : function(){
     var calacutedAccoutNumberBasedonLogic = '000000123456' //assuming its after calculating
     return calacutedAccoutNumberBasedonLogic
   }
 }
 if (isCumputedCurrentMatched){
  console.log('do something with '+ PersonAccount.CurrentAccount());
 }else {
  console.log('do something with '+ PersonAccount.SavingAccount());
 }
 ```
Even though we don't have CurrentAccount() and SavingAccount() in PersonAccount object at first, we generated it on fly based on computed values. it can go more compelx.

- Property value shorthand
When we use both key and properties name with same value it can be written shorthand.
```javascript
const name = "CurrentAccount";
const accountNumber = "12344566788";
let UserAccount = function(){
  return {
    name: name,
    accountNumber: accountNumber,
    };
}
console.log(UserAccount().name);
```
Can be written as 
```javascript
 const name = "CurrentAccount";
const accountNumber = "12344566788";
let UserAccount = function(){
  return {
    name,
    accountNumber,
    };
}
console.log(UserAccount().name);
```
Internally its a key-value pair with same value , like **[name:name](#keyvalue)** or **accountNumber:accountNumber**

- To iterate over an object key
```javascript
for (let key in pageModel){
  console.log(key);
}
```
- Object as const

 we can add more properties to const object.
```javascript
const checkAccount = {
    name:'Current Account'
};
checkAccount.accountNumber = "12345678987654"; 
console.log(checkAccount.accountNumber);
```
It wil give error,only if we try to set value of object itself
```javascript
checkAccount = {
  name = 'Saving Acount'
}
```
**[⬆ back to top](#table-of-contents)**

### Arrays
When we want object of ordered data items, then use Arrays.
It means that Arrays is also an object but of ordered type, that means they are stored in memory in 
consecutive order as opposed to normal object.
Arrays can be declared as [] or new Array();
Let check how Arrays are object.
```javascript
let obj1 = {};
let arrays1 = [];
console.log(arrays1 instanceof Array) // true
console.log(obj1 instanceof Object) // true 
console.log(arrays1 instanceof Object) // true
```
That means the properties of Arrays can be accessed similar to Object.
```javascript
let arraysOfNumber = [12,42,33,4,52];
for (let key in arraysOfNumber){
    console.log("Values in arrays at "+ key +" = "+ arraysOfNumber[key]);
  }
 ```
 We can use an array as a deque with the following operations:
- To end
  - [push](#array-push)(...items) adds items to the end.
  - pop() removes the element from the end and returns it.
- To Front  
  - shift() removes the element from the beginning and returns it.
  - unshift(...items) adds items to the beginning.


> push/pop are fast, while shift/unshift are slow , for the simple reason of more elements in arrays will need more time to shift and more opearation than just push and pop at last/top.

```javascript
var data = [ "Z" ];
data.push( "A" );
data.push( "B", "C" );
console.log( "Push Data at End" );
console.log( data );
```
> Push Data at End

> ["Z", "A", "B", "C"]
```javascript
var data = [ "Z" ];
data.unshift( "A" );
data.unshift( "B", "C" );
console.log( "Unshift Data at Front" );
console.log( data );
```
> Unshift Data at Front

> ["B", "C", "A", "Z"]

> C
```javascript
var data = [ "A", "B", "C" ];
console.log( data.pop() );
console.log( "Pop Data at End" );
console.log( data );
```
> Pop Data at End

> ["A", "B"]

> A
```javascript
var data = [ "A", "B", "C" ];
console.log( data.shift() );
console.log( "Shift Data at Front" );
console.log( data );
```
> Shift Data at Front

> ["B", "C"]

**[⬆ back to top](#table-of-contents)**

#### Array Functions/Methods
- Adding items
  - Mutative
    ```javascript
    list.push(X)            // list == [_,_,_,_,_,X]
    list.unshift(X)         // list == [X,_,_,_,_,_]
    list.splice(2, 0, X)    // list == [_,_,X,_,_,_]
    ```
  - Immutable
    ```javascript
    list.concat([X,Y])      // → [_,_,_,_,_,X,Y]
    ```
- Subsets
  - Immutable 
    ```javascript
    list.slice(0,1)         // → [a        ]
    list.slice(1)           // → [  b,c,d,e]
    list.slice(1,2)         // → [  b      ]
    ```   
  - Mutative
    ```javascript
    list.slice(0,1)         // → [a        ]
    list.slice(1)           // → [  b,c,d,e]
    list.slice(1,2)         // → [  b      ]
    ```
- Inserting
```javascript
// after -- [_,_,REF,NEW,_,_]
list.splice(list.indexOf(REF)+1, 0, NEW))
// before -- [_,_,NEW,REF,_,_]
list.splice(list.indexOf(REF), 0, NEW))
```
- Replace items
```javascript
list.splice(2, 1, X)    // list == [a,b,X,d,e]
```
- Removing items
```javascript
list.pop()              // → e    list == [a,b,c,d]
list.shift()            // → a    list == [b,c,d,e]
list.splice(2, 1)       // → [c]  list == [a,b,d,e]
```
- Iterables
```javascript
.filter(n => ...) => array
.find(n => ...)  // es6
.findIndex(...)  // es6
.every(n => ...) => Boolean // ie9+
.some(n => ..) => Boolean   // ie9+
.map(n => ...)   // ie9+
.reduce((total, n) => total) // ie9+
.reduceRight(...)
```
more you can find at [devhints](https://devhints.io/js-array)

Let dig into few of frequently used one.

- [splice  vs  slice](#splice-slice)
  - splice (used for Replace,Mutative Subsets ,Inserting and Removing items)

      > In splice ,**first** parameter defines the position where new elements should be **added** and 
      **second** parameter defines how many elements should be **removed** and rest parameters separated by **,**
      is considered as items to be **added**.
      ```javascript
      var data = ["1", "2", "3", "4"];
      data.splice(2, 1, "5", "6");
      ["1", "2", "5", "6", "4"]
      ```
      Here its will remove "3" (as zero-based indices) and add "5","6".
      Now  what if we don't give the anything after 2nd parameter then its will simply remove and add nothing.
      ```javascript
      var data = ["1", "2", "3", "4"];
      data.splice(2, 1);
      ["1", "2", "4"]
      ``` 
  - slice(Immutable Subsets)

      > It can have either 1 or 2 arguments and it selects array elements from the start argument(param 1), and up to (but not included) the end argument(param 2) and return only the items from start argument to end argument (excluding end argument).
      ```javascript
      var data = ["1", "2", "3", "4"];
      let newdata = data.slice(2, 3); //start from "3" but upto [3(end)-2(start)] = 1 )1 element.
      console.log(data); //["1", "2", "3", "4"]
      console.log(newdata); // ["3"]
      ```

     ```javascript
      var data = ["1", "2", "3", "4"];
      data.slice(2); // start from "3" but upto no number mentioned then till end.
      ["3", "4"]
      ```
**[⬆ back to top](#table-of-contents)**
- **Notes**
  - Use [Array push](#array-push) insteadof direct assignment to add items to an array.
  - Use array spreads **...** to copy arrays .e.g. 
    ```javascript 
    const itemsCopy = [...items]; 
    ```
  - To convert an iterable object to an array, use spreads ... instead of Array.from
    ```javascript 
    // good
    const nodes = Array.from(foo);

    // best
    const nodes = [...foo]; 
    ```
  - Use Array.from for converting an array-like object to an array.
    ```javascript 
    const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
    // bad
    const badarray = Array.prototype.slice.call(arrLike);

    // good
    const goodarray = Array.from(arrLike);
    ```
  - Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
    ```javascript 
    // bad
    const bad = [...foo].map(bar);

    // good
    const good = Array.from(foo, bar);
    ```
- [map vs reduce vs filter](#map-reduce-filter) **[array of same length vs single computed value  vs filtered array of same or less length]**
  - map [ To fetch computed or part of same array resulting with same length.]
    ```javascript
    const numbers = [2, 4, 8, 10];
    const double = numbers.map(function(x){ return x * 2;}); 
    //or with arrow function we will see that later
    const double = numbers.map(x => x * 2);
    [4, 8, 16, 20]
    //or 
    var techstack = [
      { id: 1, name: 'javascript' },
      { id: 2, name: 'angular' },
      { id: 3, name: 'spring' },
      { id: 4, name: 'typescript' }
    ];
    techstack.map(techstack => techstack.name)
    ```
  - filter[filtered new array with all elements that pass the test]
    ```javascript
    var filtertechstack = [
      { id: 1, name: 'javascript',score: 50 },
      { id: 2, name: 'angular' ,score: 60},
      { id: 3, name: 'spring' ,score: 70}, 
      { id: 4, name: 'typescript' ,score: 40}
    ];
    var passingMarks = filtertechstack.filter((filtertechstack) =>  filtertechstack.score >= 50);
    console.log(passingMarks); 
    ```
   - reduce [ new array/item with computed value for every item in original array ,against an accumulator[here total]]
    ```javascript
    var reducetechstack = [
        { id: 1, name: 'javascript',score: 50 },
        { id: 2, name: 'angular' ,score: 60},
        { id: 3, name: 'spring' ,score: 70},
        { id: 4, name: 'typescript' ,score: 40}
      ];
      var totalscore = reducetechstack.reduce((total ,reducetechstack) 
      =>  total += reducetechstack.score,0);
      console.log(totalscore);
    ``` 
    reduce is more poweful then map and filter , we can implement map and filter using [reduce](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d) 

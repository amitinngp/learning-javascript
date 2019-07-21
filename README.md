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

## Table of Contents

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

```
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

```
e.g.
 { "age" : 30 } , { isPrimitive: boolean}, {"name" : "javascript"}
 or
 {
        selector: 'pt-hello-app',
 }
```

- **Object**

```
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

```
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

```
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
```
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

```
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
 ```
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
```
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
```
 const name = "CurrentAccount";
const accountNumber = "12344566788";
let UserAccount = function(){
  return {
    name,
    accountNumber,
    };
}
console.log(UserAccount().name1);
```
Internally its a key-value pair with same value , like **name:name** or **accountNumber:accountNumber**

- To iterate over an object key
```
for (let key in pageModel){
  console.log(key);
}
```
- Object as const

 we can add more properties to const object.
```
const checkAccount = {
    name:'Current Account'
};
checkAccount.accountNumber = "12345678987654"; 
console.log(checkAccount.accountNumber);
```
It wil give error,only if we try to set value of object itself
```
checkAccount = {
  name = 'Saving Acount'
}
```
### Arrays
When we want object of ordered data items, then use Arrays.
It means that Arrays is also an object but of ordered type, that means they are stored in memory in 
consecutive order as opposed to normal object.
Arrays can be declared as [] or new Array();
Let check how Arrays are object.
```
let obj1 = {};
let arrays1 = [];
console.log(arrays1 instanceof Array) // true
console.log(obj1 instanceof Object) // true 
console.log(arrays1 instanceof Object) // true
```
That means the properties of Arrays can be accessed similar to Object.
```
let arraysOfNumber = [12,42,33,4,52];
for (let key in arraysOfNumber){
    console.log("Values in arrays at "+ key +" = "+ arraysOfNumber[key]);
  }
 ```
 We can use an array as a deque with the following operations:
- To end
  - push(...items) adds items to the end.
  - pop() removes the element from the end and returns it.
- To Front  
  - shift() removes the element from the beginning and returns it.
  - unshift(...items) adds items to the beginning.


> push/pop are fast, while shift/unshift are slow , for the simple reason of more elements in arrya will need more time to shift and more opearation than just push and pop at last/top.

```
var data = [ "Z" ];
data.push( "A" );
data.push( "B", "C" );
console.log( "Push Data at End" );
console.log( data );
```
> Push Data at End

> ["Z", "A", "B", "C"]
```
var data = [ "Z" ];
data.unshift( "A" );
data.unshift( "B", "C" );
console.log( "Unshift Data at Front" );
console.log( data );
```
> Unshift Data at Front

> ["B", "C", "A", "Z"]

> C
```
var data = [ "A", "B", "C" ];
console.log( data.pop() );
console.log( "Pop Data" );
console.log( data );
```
> Pop Data at End

> ["A", "B"]

> A
```
var data = [ "A", "B", "C" ];
console.log( data.shift() );
console.log( "Shift Data" );
console.log( data );
```
> Shift Data at Front

> ["B", "C"]
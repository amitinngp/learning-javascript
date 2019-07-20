# Learning Javascripts (not basics)

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
   "start": "http-server -a localhost -p 9903 -o -c-1 ./learn",
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
            "district" : "Wan Chai"
            "city": "Hong Kong"
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
            "district" : "Wan Chai"
            "city" : "Hong Kong"
            "call" : function({"phoneNumber": "+8523445678"}){}
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
            "district" : "Wan Chai"
            "city" : "Hong Kong"
            "call" : function({"phoneNumber": "+8523445678"}){}
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
            "district" : "Wan Chai"
            "city" : "Hong Kong"
            "call" : function() {
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
            "district" : "Wan Chai"
            "city" : "Hong Kong"
            "call" : fuction({"phoneNumber": "+8523445678"}){}
        }
  },
  {
      name: "typescript",
      address: {
            "district" : "central"
            "city" : "Hong Kong"
            "call" : function({"phoneNumber": "+8523445679"}){}
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
 Perperties and Functions within object can be accessed using properties accessor **[]**  or **.**
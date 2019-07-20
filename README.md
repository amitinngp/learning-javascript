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
 1. install [npm](https://www.npmjs.com/get-npm) and run below command
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
 -   > npm start  

 ### Getting started

### Objects 
Objects in javascripts 
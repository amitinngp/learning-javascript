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
var keyfromotherfunction = "name" // This can be any dynamic computed value
function getKey(k) {
  console.log(k);
  return `${k}`;
}

const obj = {
  id: 5,
  [getKey(keyfromotherfunction)]: "javascript"
};

console.log(obj)

 /* 
Example 3  Object with invlid keys
Only invalid identifiers should be in single quote
*/

const Obj = {
  one: 1,
  two: 2,
  'three-key': 3, // it can not be three-key: 3
};
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
function getPersonKey(k) {
  console.log(k);
  return `${k}`;
}
const obj = {
  id: 5,
  [getPersonKey("name")]: "javascript"
};

console.log(obj)

 /* 
Example 3  Object with complex keys
Only invalid identifiers should be in single quote
*/
// bad
const badObj = {
  'one': 1,
  'two': 2,
  'three-key': 3,
};

// good
const goodObj = {
  one: 1,
  two: 2,
  'three-key': 3,
};
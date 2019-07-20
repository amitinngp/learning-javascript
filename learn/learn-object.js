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
Example 1 Plain Object
*/
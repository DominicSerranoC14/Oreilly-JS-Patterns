'use strict';

// Revealing Module pattern
// This pattern is designed for easier readability
const module = (function() {
  // Private variables / methods contained in the modules closure
  let itemCount = 0;
  let itemList = [];
  let privateMethod = () => console.log('I am a privateMethod');
  let getItemCount = () => itemCount;

  // All function and variables are defined in the closure,
  // Not just private methods and variables

  // Increments private variable
  let incrementItemCount = () => itemCount++;

  // Returns private array
  let getItemList = () => itemList;

  // Adds to private array
  let newItem = (item) => itemList.push(item);

  // Invokes privateMethod
  let callPrivateMethod = () => {
    console.log("I am the public method");
    privateMethod();
  };

  // Object which is exposed publicly
  // Public functions and variables are passed in here
  return {
    getItemCount,
    incrementItemCount,
    getItemList,
    newItem,
    callPrivateMethod
  };

})();

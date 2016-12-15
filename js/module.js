'use strict';

// Module pattern / IIFE
const module = (function() {
  // Private variables / methods contained in the modules closure
  let itemCount = 0;
  let itemList = [];
  let privateMethod = () => console.log('I am a privateMethod');

  // Object which is exposed publicly
  return {

    // Public methods and variables

    // Returns private variable
    getItemCount: () => itemCount,

    // Increments private variable
    incrementItemCount: () => itemCount++,

    // Returns private array
    getItemList: () => itemList,

    // Adds to private array
    newItem: (item) => itemList.push(item),

    // Invokes privateMethod
    callPrivateMethod: () => {
      console.log("I am the public method");
      privateMethod();
    }

  };

})();

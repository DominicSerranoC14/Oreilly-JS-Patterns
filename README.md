## About

This repo displays examples of JavaScript design patterns from the [O'Reilly Learning Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book) book.

### What is a pattern?
A pattern is a reusable solution that can be applied to commonly occurring problems in software design.

### Constructor Pattern
[Check out the full example here](https://github.com/DominicSerranoC14/Oreilly-JS-Patterns/blob/dev/js/constructor.js)
```
Constructor with Prototypes

function Pet (name, species, color) {
  this.name = name;
  this.species = species;
  this.color = color;
};

Pet.prototype.introducePet = function() {
  return `This is my pet ${this.name}, and it is a ${this.species}`;
};
```


### Module Pattern
[Check out the full example here](https://github.com/DominicSerranoC14/Oreilly-JS-Patterns/blob/master/js/module.js)
```
const module = (function() {

  let itemList = [];

  // Public methods / variables
  return {
    getItemList: () => itemList,
    newItem: (item) => itemList.push(item)
  };

})();
```

### Revealing Module Pattern
[Click here for the full example](https://github.com/DominicSerranoC14/Oreilly-JS-Patterns/blob/master/js/revealingModule.js)
```
const module = (function() {

  let itemList = [];
  let getItemList = () => itemList;
  let newItem = (item) => itemList.push(item);

  // Public methods / variables
  return {
    getItemList,
    newItem
  };

})();
```

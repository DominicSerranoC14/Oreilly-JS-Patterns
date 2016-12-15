## About

This repo was created as I am reading along to the [O'Reilly Learning Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book) book.

### What is a pattern?
A pattern is a reusable solution that can be applied to commonly occurring problems in software design.

#### Constructor Pattern
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


#### Module Pattern
[Check out the full example here](https://github.com/DominicSerranoC14/Oreilly-JS-Patterns/blob/master/js/module.js)
```
const module = (function() {

  let itemList = [];

  return {
    getItemList: () => itemList,

    newItem: (item) => itemList.push(item)
  };

})();
```

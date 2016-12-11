## About

This repo was created as I am reading along to the [O'Reilly Learning Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book) book.

### What is a pattern?
A pattern is a reusable solution that can be applied to commonly occurring problems in software design.

#### [Constructor Pattern]()
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

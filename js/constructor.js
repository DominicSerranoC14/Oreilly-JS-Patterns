'use strict';

// Constructor Pattern

// Basic Constructor
// Definition of constructor function
function Pet (name, species, color) {
  this.name = name;
  this.species = species;
  this.color = color;
  // This pattern is not ideal because this method must be redifined for each new object
  this.toString = function() {
    return `This is my pet ${this.name}, and it is a ${this.species}`
  };
};


// Constructor with Prototypes pattern
// Definition of constructor function
function Pet2 (name, species, color) {
  this.name = name;
  this.species = species;
  this.color = color;
};

// This method uses the prototype object to add a new method and pass the method
// onto each new object with prototypical inheritance
Pet2.prototype.toString = function() {
  return `This is my pet ${this.name}, and it is a ${this.species}`;
};

/**
 * Programming basics
 */

// DECLARATIONS

const nonReassigningVariable = 'string';

try {
  nonReassigningVariable = 'NOT-ALLOWED';
} catch (error) {
  
}

let reAssignableVariable = "can-be changed";
reAssignableVariable = 'this is allowed';

var generalVariable = 'this is the loosest form of variable';

// Declarations can also be attached to an existing instance
generalVariable.anInstanceAttribute = 6;

// FUNCTIONS

const addNumbersArrow = (numOne, numTwo) => numOne + numTwo;

function addNumbersFunction (numOne, numTwo) {
  return numOne + numTwo;
}

// functions are just like other objects and can have declarations attached as attributes

addNumbersArrow.timesCalled = 0;

const result = (function() {
  /**
   * DO SOMETHING ASYNCHRONOUSLY
   */
  return 'this is the result';
})()

// NUMBERS

const one = 1;
const decimal = 0.2;

// Objects

const object = {
  attribute: 5,
  methodOne: () => {
    console.log('methodOne called');
  },
  toJSON() {
    return 'nothing here!';
  }
};

class ClassOne {
  constructor(data) {
    this.data = data;
  }
  setMethod(data) {
    this.data = data;
  }
  getMethod() {
    return this.data
  }
  typicalMethod(newData) {
    this.data = newData;
    return this;
  }
}

const object = new ClassOne();

console.log(object);
console.log(object.data);
console.log(object.getMethod());
object.setMethod('added onto object');

console.log(object);
console.log(object.getMethod());
console.log(object.typicalMethod('other'));

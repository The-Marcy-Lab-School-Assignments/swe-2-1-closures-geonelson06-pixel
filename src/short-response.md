# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1

Encapsulation is the concept of bundling data (properties) and methods (functions) that work on that data within a single unit, such as an object or class. It also restricts direct access to some of an object's internal data to protect it from unwanted interference or misuse. This is often achieved using private variables and public methods (getters and setters). The main goal is to keep the internal state hidden and only expose what is necessary, promoting cleaner, safer, and more maintainable code.

---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

A closure is when an inner function “remembers” and can access variables from its outer function’s scope, even after the outer function has finished running. Closures let functions keep using data that was in place when they were created.

In this example, the arrow function inside map() forms a closure because it accesses the multiplier variable from the outer function multiplyNumsBy. Even though map() runs a new inner function for each element, that inner function still remembers and uses the multiplier value from the parent scope.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: () => {
      console.log(`${this.name} the ${this.species} says ${sound}`)
    }
  }
  return animal;
}

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

The 'this' keyword refers to the object that is currently calling the method. Its value depends on how and where the function is invoked. In regular functions, this refers to the object that owns the method, but in arrow functions, this is inherited from the surrounding scope.

It’s not working because makeNoise is defined as an arrow function. Arrow functions don’t have their own this; they inherit it from the global scope. That means this.name and this.species don’t point to the animal object, causing them to return undefined.

This is the fixed version:
```
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: function() {
      console.log(`${this.name} the ${this.species} says ${sound}`);
    }
  };
  return animal;
};
```
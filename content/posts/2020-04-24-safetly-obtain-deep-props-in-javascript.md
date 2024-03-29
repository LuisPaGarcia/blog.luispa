---
templateKey: blog-post
title: Safetly obtain deep props in JavaScript
date: 2020-04-24T15:54:19.423Z
description: >-
  In this post, we will create a function to access the properties in objects in
  our JavaScript code in safety way.
tags:
  - javascript
  - props access
  - object
  - array
---
The problem we will solve it's simple. When you have an object with nested props, depending on network response or higher processes, the object struct can change and your logic to get that properties need to adapt to that situation.

#### Example

Imagine you have a conditional properties adding like this:

```javascript
var family ={}
var addDad = true
var addMom = true

if (addDad === true) {
  family.dad = {
    fname: "Carl",
    lname: "Manson",
    age: 35
  }

// At this point, the family object have 2 level of nesting

}

if (addMom === true) {
  family.mom = {
    fname: "Lisa",
    lname: "Skiner",
    age: 30
  }

// At this point, the family object have 2 level of nesting

}

// If we always have `mom` and `dad` objects, this will work.
console.log('The father name is: ', family.dad.fname + family.dad.lname)
console.log('The father name is: ', family.mom.fname + family.mom.lname)
```

In this scenario, nothing seems to be difficult, but if we add some changes, the definition of `I have this under control` can be variable.


```javascript
var family ={}
// Now we set false the assignation of dad and mom objects
var addDad = false
var addMom = false

if (addDad === true) {
  family.dad = {
    fname: "Carl",
    lname: "Manson",
    age: 35
  }
}

if (addMom === true) {
  family.mom = {
    fname: "Lisa",
    lname: "Skiner",
    age: 30
  }
}

// this will fail we need to validate if the nested values exists.

// console.log('The father name is: ', family.dad.fname + family.dad.lname)
// console.log('The father name is: ', family.mom.fname + family.mom.lname)

```

We will solve this with a tiny function

```javascript

/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
function propAccessor(object, key, def) {
    key = key.split ? key.split('.') : key;
    for (var p = 0; p < key.length; p++) {
        object = object ? object[key[p]] : undefined;
    }
    return object === undefined ? def : object;
}

```

## How to use it in out case scenario


```javascript

function propAccessor(object, key, def) {
    key = key.split ? key.split('.') : key;
    for (var p = 0; p < key.length; p++) {
        object = object ? object[key[p]] : undefined;
    }
    return object === undefined ? def : object;
}

var family ={}
// Now we set false the assignation of dad and mom objects
var addDad = true
var addMom = false

if (addDad === true) {
  family.dad = {
    fname: "Carl",
    lname: "Manson",
    age: 35
  }
}

if (addMom === true) {
  family.mom = {
    fname: "Lisa",
    lname: "Skiner",
    age: 30
  }
}

// Using propsAccessor

var dadName = propsAccessor(family, 'dad.fname', '') + propsAccessor(family, 'dad.lname', '')
var momName = propsAccessor(family, 'mom.fname', '') + propsAccessor(family, 'dad.lname', '')

console.log('The father name is: ', dadName)
console.log('The father name is: ', mom)

```

This is a very simple example, but I encourage you to reach in your code the use useful use cases to property solve the prop access in JavaScript.


```typescript
// Target example
const obj = {
    a: 1,
    b: 2,
    c: { d: { e: { f: 3 } } },
    g: undefined
};
 
// How to use get
console.log(propsAccessor(obj, 'c.d.e.f', ''))
// => Returns a 3

console.log(propsAccessor(obj, 'c.d.e.g', ''))
// => Returns a '' (the third parameter is the default)

console.log(propsAccessor(obj, 'c.d.e.g'))
// => Returns a undefined

```

Happy Coding!

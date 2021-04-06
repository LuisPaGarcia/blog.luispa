---
templateKey: blog-post
title: How to add Barrels in TypeScript (or JavaScript)
date: 2020-02-03T16:40:40.768Z
description: ' '
tags:
  - javascript
  - typescript
  - barrels
---
Hi!

This is a short post about how to create a useful import/export strategy on Typescript. Now, this is not an exclusive Typescript feature, but in this example, we will apply this to the TS environment. 

`The goal of this is to make the code more readable and maintainable once it gets it bigger and bigger. `


> A barrel's a way to put together all the same type or the same usage files in the same place, and then, use a unique file to import them and then export them at the same time.

## Example

This is the scenario. We have 3 interfaces in our project `interfaces` folder and an `index.ts` file imported them on the root of the project

```
index.ts
interfaces/
  bear.interface.ts
  pig.interface.ts
  man.interface.ts
```

```typescript
// index.ts
import { Bear } from './interfaces/bear.interface';
import { Pig } from './interfaces/pig.interface';
import { Man } from './interfaces/man.interface';
```

> The only thing that it's common between these 3 files it's that all 3 contains interfaces.


As you can see, we have 3 import statements. This is a common and normal approach.

## Using barrels.

This is the scenario when the barrels come on the scene. We can modify just a little bit out of the structure and we will have a more readable way to do the imports. You must follow these 3 steps.


1. Adding a barrel file.

Add an index to the interfaces folder.

```
index.ts
interfaces/
  bear.interface
  pig.interface
  man.interface
  index.ts   <--- Barrel file
```

2. Import all the interfaces and then export them in the same file.

```typescript
// ./interfaces/index.ts
export * from './bear.interface';
export * from './man.interface';
export * from './pig.interface';
```


3. Update your `imports` statements on the root of the project index file.

```typescript
// **BEFORE** 
// index.ts
import { Bear } from './interfaces/bear.interface';
import { Pig } from './interfaces/pig.interface';
import { Man } from './interfaces/man.interface';

// **NOW** 
// index.ts
import { Bear, Pig, Man } from './interfaces';
```


## Wrap up

This barrel approach doesn't resolve a huge problem, but ovoid the quantity of readability of the code when de codebase gets bigger.

You can establish barrels on JS and TS as well. 

And that's all for today.

Happy coding!

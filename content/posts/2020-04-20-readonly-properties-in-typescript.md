---
templateKey: blog-post
title: Readonly properties in TypeScript
date: 2020-04-20T15:29:26.039Z
description: >-
  TypeScript introduced the keyword `readonly`, which makes a property as
  read-only in the class, type or interface.
tags:
  - typescript
  - javascript
---


Prefix `readonly` is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at the declaration or initialized inside the class constructor.

```typescript
class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; //Compiler Error
```

In the above example, we have the `Employee` class with two properties- `empName` and `empCode`. Since `empCode` is read only, it can be initialized at the time of declaration or in the constructor.

If we try to change the value of `empCode` after the object has been initialized, the compiler shows the following compilation error:

> error TS2540: Cannot assign to empCode' because it is a constant or a read-only property.

An interface can also have `readonly` member properties.

```typescript
interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj:IEmployee = {
    empCode:1,
    empName:"Steve"
}

empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
```

As you can see above, `empCode` is `readonly`, so we can assign a value at the time of creating an object but not afterward.

In the same way, you can use `Readonly<T>` to create a `readonly` type, as shown below.

```typescript
interface IEmployee {
    empCode: number;
    empName: string;
}

let emp1: Readonly<IEmployee> = {
    empCode:1,
    empName:"Steve"
}

emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
emp1.empName = 'Bill'; // Compiler Error: Cannot change readonly 'empName'

let emp2: IEmployee = {
    empCode:1,
    empName:"Steve"
}

emp2.empCode = 100; // OK
emp2.empName = 'Bill'; // OK
```

In the above example, `emp1` is declared as `Readonly<IEmployee>` and so values cannot be changed once initialized.

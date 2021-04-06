---
templateKey: blog-post
title: React hooks with TypeScript
date: 2020-04-20T15:20:51.063Z
description: Hi! This is a short post about how to use React Hooks with TypeScript.
tags:
  - react
  - typescript
  - create-react-app
---


> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Check out [this page](https://reactjs.org/docs/hooks-intro.html) for more details about hooks. I think they’re pretty awesome. Probably game-changing! Hooks make formerly “stateless” functional components to basically everything old class components can be.

So much cleaner API, with no breaking changes.

Just quickly after their release in React 16.7., React typings in DefinitelyTyped got an update as well. Check out how you can use hooks with TypeScript!


## Benefits of use TypeScript

- Code scalability with “Interface oriented development”
- TypeScript helps you dealing with growing teams.
- Tooling and Community, for example, Microsoft made an awesome community effort work.
- ES-next compliance.
- Types have a proven ability to enhance code quality and understandability.


You can start testing this very quick using [codesandbox.io](https://codesandbox.io/s/react-ts) or [StackBlitz](https://stackblitz.com/edit/react-ts-zw5gxi) or locally using:

```shell
$ npx create-react-app my-app --template typescript
```


In this post we will see:

1. useState
1. useEffect
1. useContext


## useState

`useState` is probably one you are going to use a lot. Instead of using `this.state` from class components, you can access the current state of a component instance, and initialize it, with one single function call. Our desire for strong typing is that values we initially set, get per component update, and set through events, always have the same type. With the provided typings, this works without any additional TypeScript:

```typescript
// import useState next to FunctionComponent
import React, { FunctionComponent, useState } from 'react';

// our components props accept a number for the initial value
const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [clicks, setClicks] = useState(initial);
  return <>
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
  </>
}
```

And that’s it. Your code works with out any extra type annotations, but still typechecks.

## useEffect
`useEffect` is here for all side effects. Adding event listeners, changing things in the document, fetching data. Everything you would use component lifecycle methods for (componentDidUpdate, componentDidMount, componentWillUnmount) The method signature is pretty straightforward. It accepts two parameters:

- A function that is called without any parameters. This is the side-effect you want to call.
- An array of values of type any. This parameter is optional. If you don’t provide it, the function provided is called every time the component update. If you do, React will check if those values did change, and triggers the function only if there’s a difference.


```typescript
// Standard use case.
const [name, setName] = useState('Stefan');
useEffect(() => {
  document.title = `Hello ${name}`;
}, [name])
```

You don’t need to provide any extra typings. TypeScript will check that the method signature of the function you provide is correct. This function also has a return value (for cleanups). And TypeScript will check that you provide a correct function as well:

```typescript
useEffect(() => {
  const handler = () => {
    document.title = window.width;
  }
  window.addEventListener('resize', handler);

  // won't compile
  return true;

  // compiles
  return () => {
    window.removeEventListener('resize', handler);
  }
})
```

This also goes for `useLayoutEffect` and `useMutationEffect`.

## useContext
`useContext` allows you to access context properties from anywhere in your components. Much like the `Context.Consumer` does in class components. Type inference works brilliantly here, you don’t need to use any TypeScript specific language features to get everything done:

```typescript
import React, { useContext } from 'react';

// our context sets a property of type string
export const LanguageContext = React.createContext({ lang: 'en' });

const Display = () => {
  // lang will be of type string
  const { lang } = useContext(LanguageContext);
  return <>
    <p>Your selected language: {lang}</p>
  </>
}
```

And that's it. We just learned how to use 3 of the most used hooks from React Hooks with TypeScript.

Happy coding!

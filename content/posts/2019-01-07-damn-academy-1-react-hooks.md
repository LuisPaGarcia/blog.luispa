---
templateKey: blog-post
title: 'Damn Academy 1: React Hooks'
date: 2019-01-07T16:45:38.840Z
description: '    '
tags:
  - react hooks
  - react alpha
  - learn react hooks
  - damn academy
  - react guatemala
---
![react hooks logo](/img/react-hooks.png)

Esta es un ejemplo de como empezar a utilizar React Hooks, una de las nuevas características que React ha agregado a su catálogo de API. 

## **TL;DR**

* `React Hooks` es una forma de escribir componentes que utilicen `state` sin necesidad de utilizar clases de JavaScript. En lugar se utilizan `Functional components`.
* Puede utilizarse en producción sin problemas sobre la versión 16.8 o superior, lanzada el 6 de febrero de 2019.

## **Como empezar**

1. Creamos un nuevo proyecto utilizando `create-react-app`
2. Instalamos la versión `16.8.0` de `react` y `react-dom` en nuestro proyecto.
3. Listo! Estamos listos para utilizar react hooks.

## Paso 1.

Vamos a utilizar `npx` para iniciar el proyecto. Debemos tener instalado `npm`, con la versión mínima `npm@5.2.0`. Para ver la versión puedes escribir en tu consola:

```bash
$ npm -v

5.2.0
```

Ya que verificamos la versión de npm podemos utilizar npx.

Este script creará un proyecto utilizando `create-react-app` sin instalarlo globalmente

```bash
$ npx create-react-app .
```

## Paso 2

Una vez instalado, vamos a utilizar `yarn` para actualizar los 2 paquetes necesarios, `react` y `react-router`. Para esto, vamos correr este script en la consola:

Si usas Yarn

```bash
$ yarn add react@^16.8.0 react-dom@^16.8.0
```

Si usas npm

```bash
$ npm i react@^16.8.0 react-dom@^16.8.0
```

Una vez terminada la instalación, ya podemos empezar a crear nuestros componentes utilizando react hooks!

## Paso 3

Dentro del proyecto, existe una carpeta llamada `src`, dentro de esta carpeta existe un archivo llamado `App.js`.

Borra todo el contenido de `App.js` y reemplázalo con el siguiente:

```javascript
import React, { useState } from 'react';

const Example = () => {
	const [ count, setCount ] = useState(0);
	const [ age, setAge ] = useState(42);
	const [ fruit, setFruit ] = useState('banana');
	const [ todos, setTodos ] = useState([ { text: 'Learn Hooks' } ]);
	const [ todo, setTodo ] = useState('');

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
		setTodo('')
	};

	return (
		<div style={{ margin: '40px' }}>
			<h1>Hooks in react!</h1>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>

			<p>You clicked {age} times</p>
			<button onClick={() => setAge(age + 1)}>Click me</button>

			<p>The fruit is {fruit}</p>
			<input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} />

			<p>List of Todos</p>
			<ul>{todos.map((t) => <li>{t.text}</li>)}</ul>
			<input
				type="text"
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					addTodo(todo);
				}}
			>
				Add todo
			</button>
		</div>
	);
};

export default Example;
```

Ahora vamos a probar nuestro código. Corre el siguiente comando en tu consola:

Si usas yarn

```bash
$ yarn start
```

Si usas npm

```bash
$ npm run start
```

Listo, ahora puedes empezar a utilizar React Hooks!

**Repositorio de Github**
<https://github.com/LuisPaGarcia/damn-hooks>

**Documentación detallada de Facebook:**

<https://reactjs.org/docs/hooks-overview.html>

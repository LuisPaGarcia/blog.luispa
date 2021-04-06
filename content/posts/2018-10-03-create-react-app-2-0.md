---
templateKey: blog-post
title: Create React App 2.0
date: 2018-10-03T15:01:01.708Z
description: |
  Babel 7, Sass, y más!
tags:
  - react
  - create-react-app 2
  - CRA2
  - react.js
---
![react banner](/img/react-banner.png)

**Create React App 2.0** se ha lanzado el 1 de Octubre, y trae consigo mejoras de un año en una sola actualización de dependencia.

Si bien React [no requiere dependencias de compilación](https://reactjs.org/docs/create-a-new-react-app.html), puede ser difícil escribir una aplicación compleja sin un corredor de prueba rápido, un minificador de producción y una base de código modular. Desde el primer lanzamiento, el objetivo de [Create React App](https://github.com/facebook/create-react-app) ha sido ayudarte a centrarte en lo que más importa: el código de tu aplicación, y a manejar la configuración de compilación y pruebas para ti.

Muchas de las herramientas en las que se basa ya han lanzado nuevas versiones que contienen nuevas características y mejoras de rendimiento: Babel 7, webpack 4 y Jest 23. Sin embargo, actualizarlas manualmente y hacer que funcionen bien juntas requiere mucho esfuerzo. Y esto es exactamente con lo que los colaboradores de Create React App 2.0 han estado ocupados durante los últimos meses: migrar la configuración y las dependencias para que no tenga que hacerlo usted mismo.

¡Ahora que Create React App 2.0 está fuera de la versión beta, veamos qué hay de nuevo y cómo puede probarlo!

> Nota: No te sientas presionado para actualizar nada. Si está satisfecho con el conjunto de características actual, su rendimiento y confiabilidad, puede seguir usando la versión en la que se encuentra actualmente. También podría ser una buena idea dejar que la versión 2.0 se estabilice un poco antes de cambiar a la producción.

Qué hay de nuevo

Aquí hay un breve resumen de las novedades de esta versión:



🎉 Más opciones de estilo: puede usar módulos Sass y CSS fuera de la caja.

🐠 Actualizamos a Babel 7, incluido el soporte para la sintaxis del  <React.Fragment> y muchas correcciones de errores.

📦 Actualizamos a webpack 4, que divide automáticamente los paquetes de JS de forma más inteligente.

🃏 Actualizamos a Jest 23, que incluye un modo interactivo para revisar instantáneas.

💎 Puede usar Apollo, Relay Modern, MDX y otras transformaciones de Babel Macros de terceros.

🌠 Ahora puede importar un SVG como componente React y usarlo en JSX.

🐈 Puedes probar el modo experimental de Yarn Plug'n’Play que elimina node_modules.

🕸 Ahora puedes conectar su propia implementación proxy en desarrollo para que coincida con su API de back-end.

🚀 Ahora puedes usar paquetes escritos para las últimas versiones de Node sin romper la compilación.

💄 Ahora puedes obtener opcionalmente un paquete de CSS más pequeño si solo planea dirigirse a los navegadores modernos.

👷‍ Los workers han sido optimizados y se crean utilizando el Workbox de Google.

**Todas estas características funcionan de forma inmediata:** para habilitarlas, sigue las instrucciones a continuación.

## Comenzando un proyecto con la Create React App 2.0

No necesitas actualizar nada especial. A partir de hoy, cuando ejecutes `create-react-app`, usará la versión 2.0 de la plantilla de forma predeterminada. Que te diviertas!

Si deseas usar **la plantilla anterior 1.x** por algún motivo, puedes hacerlo pasando `--scripts-version=react-scripts@1.x` como un argumento para `create-react-app`

## Actualización de un proyecto para Create React App 2.0

La actualización de un proyecto no expulsado para crear una aplicación React 2.0 suele ser sencilla. Abra `package.json` en la raíz de su proyecto y encuentre` react-scripts` allí.

Luego cambia su versión a 2.0.3:

> "react-scripts": "2.0.3",

Ejecuta `npm install` o `yarn `. Para muchos proyectos, ¡este cambio de una línea es suficiente para actualizar!

## Aquí hay algunos consejos más para comenzar.

**Cuando ejecutas npm start por primera vez después de la actualización,** recibirás un mensaje preguntándote qué navegadores te gustaría admitir. Presiona y para aceptar las predeterminadas. Se escribirán en tu paquete.json y puedes editarlos en cualquier momento. La aplicación Create React utilizará esta información para producir paquetes de CSS más pequeños si solo se dirige a los navegadores modernos.

**Si npm start aún no funciona para usted después de la actualización**, consulte las instrucciones de migración más detalladas en las notas de la versión. Hay algunos cambios de última hora en esta versión, pero su alcance es limitado, por lo que no deben tomarse más de unas pocas horas para resolverlos. Tenga en cuenta que la compatibilidad con navegadores antiguos ahora es opcional para reducir el tamaño del polyfill.

**Si ha expulsado anteriormente pero ahora desea actualizar**, una solución común es encontrar las confirmaciones en las que expulsó (y las confirmaciones subsiguientes que cambian la configuración), revertirlas, actualizarlas y, posteriormente, expulsarlas de manera opcional. También es posible que la función que expulsó (¿quizás módulos Sass o CSS?) Ahora sea compatible de forma inmediata.

> Nota
>
> Debido a un posible error en npm, es posible que veas advertencias sobre dependencias insatisfechas entre similares. Deberías poder ignorarlos. Por lo que sabemos, este problema no se presenta con Yarn.

## Cambios relevantes

Aquí hay una breve lista de los últimos cambios en esta versión:

* El node 6 ya no es compatible.
* La compatibilidad con navegadores más antiguos (como IE 9 a IE 11) ahora es opcional con un paquete separado.
* La división de código con `import()` ahora se comporta más cerca de la especificación, mientras que `require.ensure()` está deshabilitado.
* El entorno predeterminado de Jest ahora incluye jsdom.
* El soporte para especificar un objeto como configuración de proxy se reemplazó con el soporte para un módulo de `proxy` personalizado.
* El soporte para la extensión `.mjs` se eliminó hasta que el ecosistema a su alrededor se estabiliza.
* Las definiciones de PropTypes se eliminan automáticamente de las compilaciones de producción.

Si alguno de estos puntos le afecta, las[ notas de la versión 2.0.3](https://github.com/facebook/create-react-app/releases/tag/v2.0.3) contienen instrucciones más detalladas.

## Aprende más

Puede encontrar el registro de cambios completo en  las[ notas de la versión 2.0.3](https://github.com/facebook/create-react-app/releases/tag/v2.0.3). Este fue un gran lanzamiento, y podemos haber perdido algo. Por favor, infórmenos cualquier problema a nuestro [rastreador de problemas](https://github.com/facebook/create-react-app/issues/new) e intentaremos ayudarlo.



> Nota: Si ha estado usando versiones alpha de 2.x, le proporcionamos
>
> [ instrucciones de migración ](https://gist.github.com/gaearon/8650d1c70e436e5eff01f396dffc4114)
>
> por separado.



[Fuente](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)

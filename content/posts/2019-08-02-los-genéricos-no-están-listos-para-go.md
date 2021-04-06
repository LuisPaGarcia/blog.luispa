---
templateKey: blog-post
title: Los generics no están listos para Go
date: 2019-08-02T12:49:07.893Z
description: >-
  Las limitaciones impuestas por la falta de generics (y otras cosas que Go
  carece) generan creatividad. Si está luchando contra la falta de generics de
  Go que intenta hacer algo a su manera, es posible que desee retroceder y
  considerar una solución al problema que abarque las limitaciones de Go. A
  menudo, cuando hago esto, la nueva solución es un diseño mucho mejor.
tags:
  - go
  - golang
  - generics
---
A lo lejos, empieza a sonar un rugido gradual que crece en volumen. Una nube de polvo es visible en el horizonte. A medida que se acerca, se pueden escuchar los gritos de la multitud enfurecida que se aproxima. De repente, se detiene y se produce un breve silencio. Luego, el aire se llena con los sonidos de cientos de teclados, escribiendo con enojo la opinión del propietario sobre los **generics** y **Go**. Los clanes de Java, C #, Rust, C ++, TypeScript, Haskell y más, generalmente enemigos mortales, han combinado fuerzas para luchar en lo que puede convertirse en una de las mayores guerras de fuego de nuestro tiempo. 

Y ninguno de ellos leyó más que el título de este artículo antes de escribir su comentario.

¿Alguna vez has visto a alguien escribir algo en el sentido de **"Usaría Go, pero necesito generics"**? Quizás podemos inferir de esto que muchas de las personas que sufren por los generics en Go no son usuarios de Go. Muchos de ellos son usuarios de otro lenguaje de programación que hace que los generics, y sienten que los generics son una buena opción para este lenguaje, y por lo tanto una buena opción para cualquier idioma. La inercia de "a lo que estoy acostumbrado" se detiene violentamente cuando intentan usar Go. Las personas afectadas por esta frustración lo interpretan como un problema con Go, que Go carece de alguna característica crucial, como los genéricos. Pero esta falta de características es en sí misma una característica, no un error.

Go me parece uno de los lenguajes de programación **más conservadores disponibles en la actualidad**. Es pequeño y simple, y cada detalle está cuidadosamente pensado. Hay muy pocos rincones polvorientos de Go, en gran parte porque Go tiene menos rincones en general que la mayoría de los lenguajes de programación. Este es un factor importante en el éxito de Go hasta la fecha, en mi opinión. Casi todas las características de Go son a prueba de balas y, en mi opinión, se encuentran entre las **mejores implementaciones de sus conceptos en toda nuestra industria**. Lograr esta hazaña requiere tener menos cantidad características en total. Compare esto con C ++, que tiene demasiados disparos en el pie para contar. Podrías escribir un libro llamado “C ++: las partes buenas”, pero ten en cuenta que tal libro sobre Go no sería más que un libro sobre Go. Hay poco espacio para las partes malas en un lenguaje tan espartano.

Entonces, **¿Cómo debemos innovar en Go?** Consideremos el caso de la gestión de dependencias. 

Go 1.11 se distribuyó con la primera versión de los módulos Go, que, en mi opinión, es un game changer. Odio con todo mi ser el `$GOPATH`, y pensé que `_dep_` no era mucho mejor. El problema de `dep` es que tomó las ideas de administración de dependencias con las que otros lenguajes de programación han estado trabajando y trajo las mismas ideas a Go. 

En cambio, los módulos en Go tomaron la idea de la gestión de dependencias y la repensaron desde los principios fundamentales, luego llegaron a una solución mucho más elegante que creo que otros lenguajes de programación migrarán en los próximos años. Me gusta hacer una analogía con la física: **dep es como la Relatividad General o el Modelo Estándar**, mientras que los módulos Go son más como la **Gran Teoría Unificada**. Go no se conforma con nada menos al agregar funcionalidades. No es un lenguaje en el que sea deseable la experimentación liberal con ideas imperfectas.

Siento que esto se aplica al hablad de los genéricos. En mi opinión, los genéricos son una **solución imperfecta para un problema no resuelto en informática**. Ninguna de las propuestas que he visto (especialmente [contratos o contracts](https://go.googlesource.com/proposal/+/master/design/go2draft-contracts.md)) se siente "Listo" o completo. Algo de esto es un presentimiento, pero también hay problemas tangibles. 

Por ejemplo, el scope de problemas que los genéricos resuelven se cruza con otras funcionalidades de Go, lo que debilita la fuerza de ambos aspectos. "Qué solución debo utilizar para este problema?" es una pregunta que diferentes personas responderán de manera diferente y en consecuencia, su código, en el mejor de los casos, no estará de acuerdo sobre lo que significa "idiomático" y, en el peor de los casos, será simplemente incompatible. 

Otro problema es que la propuesta cambia el significado de `Go idiomático` en primer lugar: de repente, grandes extensiones del código Go, incluida una biblioteca estándar, se volverán `unidiomáticas`. Una de las mayores fortalezas de Go es que el código escrito hace 5 años **sigue siendo idiomático**. Es casi imposible escribir un código Go unidiomático.

Con tanta gente suspirando por eso, ¿Por qué no han tenido sentido todavía? ¿Cómo pueden saber mejor que todas estas personas? Mi tono cambió una vez que comencé a usar Go más en serio, y ahora admiro su moderación. Parte de esto es una evolución de mis valores como programador en general: la simplicidad y la elegancia son ahora los principios para los que optimizo, incluso si eso significa que ciertas clases de programas simplemente no están sobre la mesa. 

Creo que Go debería sentirse cómodo al no ser adecuado para escribir ciertas clases de programas. No creo que los lenguajes de programación deban competir entre sí en un intento de convertirse en la solución perfecta para cada problema. Esto es imposible, y los intentos simplemente crearán un maldito desorden de cocina que resuelva mal todos los problemas.

> Las limitaciones impuestas por la falta de generics (y otras cosas que Go carece) generan creatividad. Si está peleando contra la falta de generics de Go que intenta hacer algo a tu manera, es posible que desees retroceder y considerar una solución al problema que abarque las limitaciones de Go. A menudo, cuando hago esto, la nueva solución es un diseño mucho mejor.

Así que espero que Go aguante hasta que se presente la solución correcta, y aún no lo ha hecho. Hay otros buenos lenguajes de programación. ¡Úselos! Personalmente uso una amplia variedad de lenguajes de programación, y aunque amo mucho a Go, probablemente solo esté en el tercer o cuarto lugar en términos de la frecuencia con la que aparece en mis proyectos. Es excelente en su dominio y no necesita tropezarse torpemente con otros.

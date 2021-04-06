---
templateKey: blog-post
title: Elementos esenciales de seguridad de la API de REST (Parte I)
date: 2019-01-07T17:27:27.451Z
description: '      '
tags:
  - seguridad rest
  - api rest
  - seguridad api restful
  - rest
  - api
---
La seguridad no es una moda de último momento. Tiene que ser una parte integral de cualquier proyecto de desarrollo y también para las API REST. Hay varias formas de asegurar una API RESTful, por ejemplo. autenticación básica, OAuth, etc., pero una cosa es segura de que las API RESTful deben ser `unstated` o sin estado, por lo que la autenticación / autorización solicitada no debe depender de `cookies` o `sesiones`. 

En su lugar, cada solicitud de API debe venir con algunas credenciales de autenticación de tipo que deben validarse en el servidor para cada solicitud.

## Principios de diseño de seguridad en REST

El documento "La protección de la información en sistemas informáticos" de Jerome Saltzer y Michael Schroeder, [“The Protection of Information in Computer Systems” by Jerome Saltzer and Michael Schroeder](http://web.mit.edu/Saltzer/www/publications/protection/) presenta **ocho principios** de diseño para asegurar la información en sistemas informáticos, como se describe en las siguientes secciones:

1. **Mínimo privilegio:** una entidad solo debe tener el conjunto de permisos necesarios para realizar las acciones para las que está autorizada, y no más. Los permisos se pueden `agregar según sea necesario` y se deben `revocar cuando ya no estén en uso.`
2. **Valores predeterminados a prueba de fallos:** el nivel de acceso predeterminado de un usuario a cualquier recurso en el sistema debe ser `"denegado"` a menos que se le haya otorgado un `"permiso"` explícitamente.
3. **Economía del mecanismo:** El diseño debe ser lo más simple posible. Todas las interfaces de los componentes y las interacciones entre ellas deben ser lo suficientemente simples como para comprenderlas.
4. **Mediación completa:** un sistema debe validar los derechos de acceso a todos sus recursos para garantizar que estén permitidos y no deben confiar en la matriz de permisos almacenada en caché. Si se revoca el nivel de acceso a un recurso dado, pero eso no se refleja en la matriz de permisos, violaría la seguridad.
5. **Diseño abierto:** este principio destaca la importancia de construir un sistema de manera abierta, sin algoritmos secretos y confidenciales.
6. **Separación de privilegios:** la concesión de permisos a una entidad no debe basarse únicamente en una única condición, una combinación de condiciones basadas en el tipo de recurso es una mejor idea.
7. **Mecanismo menos común:** se refiere al riesgo de compartir el estado entre diferentes componentes. Si uno puede corromper el estado compartido, entonces puede corromper todos los demás componentes que dependen de él.
8. **Aceptación psicológica:** establece que los mecanismos de seguridad no deben hacer que el recurso sea más difícil de acceder que si los mecanismos de seguridad no estuvieran presentes. En resumen, `la seguridad no debería empeorar la experiencia del usuario.`

[Parte 2](https://blog.luispa.im/blog/)

### Fuentes:

[http://web.mit.edu/Saltzer/www/publications/protection/](http://web.mit.edu/Saltzer/www/publications/protection/)

[https://restfulapi.net/security-essentials/](https://restfulapi.net/security-essentials/)



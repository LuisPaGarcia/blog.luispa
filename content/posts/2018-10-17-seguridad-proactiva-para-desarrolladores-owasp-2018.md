---
templateKey: blog-post
title: 'Seguridad proactiva para desarrolladores: OWASP 2018'
date: 2018-10-17T16:10:36.559Z
description: ' '
tags:
  - seguridad
  - owasp
  - '2018'
---


![security header](/img/photo-1508896080210-93c377eb4135.jpeg)

> OWASP lanzó los 10 mejores controles proactivos para desarrolladores de software que describen las áreas más críticas en las que los desarrolladores de software deben enfocarse

El Top 10 Proactive Controls 2018 de OWASP contiene una lista de técnicas de seguridad que cada desarrollador debe considerar para cada desarrollo de proyecto de software.

"Los 10 mejores controles proactivos de OWASP son similares a los 10 principales de OWASP pero se centraron en técnicas y controles defensivos en lugar de riesgos", dice el documento OWASP.

La lista de Controles proactivos comienza definiendo los requisitos de seguridad derivados de los estándares de la industria, las leyes aplicables y un historial de vulnerabilidades pasadas.

## Lista de los 10 controles proactivos principales ordenados del 1 al 10 en función de la importancia.

**C1:** Definir requisitos de seguridad

**C2:** Aprovechar marcos de seguridad y bibliotecas

**C3:** Asegurar acceso a la base de datos

**C4:** Codificar y escapar datos

**C5:** Validar todas las entradas

**C6:** Implementar identidad digital

**C7:** Aplicar controles de acceso

**C8:** Proteger datos en todas partes

**C9:** Implementar registro de seguridad y monitoreo

**C10:** Maneja todos los errores y excepciones

> Definir los requisitos de seguridad

Los requisitos de seguridad brindan la funcionalidad necesaria para que el software se satisfaga. Se deriva de los estándares de la industria, las leyes aplicables y un historial de vulnerabilidades pasadas.

En lugar de tener un enfoque personalizado para cada aplicación, los requisitos de seguridad estándar pueden permitir a los desarrolladores reutilizar el mismo para otras aplicaciones.

> Aproveche los marcos de seguridad y las bibliotecas

Bibliotecas o marcos de terceros en su software de fuentes confiables, que deben ser mantenidas y utilizadas activamente por muchas aplicaciones.

Aprovechar los marcos de seguridad ayuda a los desarrolladores a lograr los objetivos de seguridad de manera más eficiente y precisa.

> Acceso a base de datos segura

Esta sección resume las áreas clave para considerar el acceso seguro a todos los almacenes de datos.

* Consultas seguras
* Configuración
* Autenticación
* Comunicación segura

> Codificar y escapar de datos

Codificar y escapar juega un papel vital en las técnicas defensivas contra los ataques de inyección. El tipo de codificación depende de la ubicación donde se muestran o almacenan los datos.

Los diferentes tipos de codificación incluyen Codificación de Entidad HTML, Codificación de Atributo HTML, Codificación de JavaScript y Codificación de URL.

> Validar todas las entradas

Solo los datos con el formato correcto deben permitirse al ingresar al sistema de software. La aplicación debe verificar que los datos sean sintáctica y semánticamente.

> Implementar identidad digital

La identidad digital es la forma de representar la transacción en línea, a continuación se muestran las recomendaciones de OWASP para una implementación segura: Niveles de autenticación, Gestión de sesiones, Tokens

> Hacer cumplir los controles de acceso

Los controles de acceso implican el proceso de otorgar o denegar la solicitud de acceso a la aplicación, un usuario, programa o proceso. A continuación están las Pautas de OWASP.

* Diseño de control de acceso completamente al frente
* Forzar todas las solicitudes para pasar por controles de control de acceso
* Denegar por defecto
* Principio de Privilegio mínimo
* No funciones de Hardcode
* Registrar todos los eventos de control de acceso

> Proteja los datos en todas partes

Es importante almacenar de forma segura los datos confidenciales, como contraseñas, números de tarjetas de crédito, registros de salud, información personal y secretos comerciales, ya que se rige en particular por las Regulaciones Generales de Protección de Datos de la UE GDPR y PCI DSS.

La clasificación de datos basada en la sensibilidad es importante.

* Cifrado de datos en tránsito
* Cifrado de datos en reposo
* Ciclo de vida clave secreto
* Aplicación móvil: almacenamiento local seguro
* Administración de Secretos de Aplicación
* Implementar el registro y monitoreo de seguridad

Registrando la información de seguridad durante la operación en tiempo de ejecución de una aplicación. El monitoreo es la revisión en vivo de los registros de aplicaciones y seguridad que utilizan varias formas de automatización.

> [Fuente: OWASP_Proactive_Controls](https://www.owasp.org/index.php/OWASP_Proactive_Controls)

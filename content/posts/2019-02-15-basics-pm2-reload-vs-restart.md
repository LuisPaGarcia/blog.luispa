---
templateKey: blog-post
title: 'Basics: pm2 - reload vs restart'
date: 2019-02-15T20:36:55.427Z
description: '  '
tags:
  - pm2
  - nodejs
  - reload
  - restart
  - blog.luispa.im
---
![null](/img/serena-repice-lentini-1247685-unsplash.jpg)

He estado utilizando PM2 por al menos 2 años, y es uno de los mejores `process manager` que he usado. Previamente utilizaba forever, pero pm2 ha superado mis expectativas.

En este corto post voy a explicar las diferencias entre recargar y hacer un reset a un daemon con pm2.

## Ejemplo

Tenemos 2 daemons o procesos de NodeJS corriendo gracias a `pm2`.

```bash
$ pm2 ls
┌──────┬──────┬────────┬───┬─────┬────────────┐
│ Name │ mode │ status │ ↺ │ cpu │ memory     │
├──────┼──────┼────────┼───┼─────┼────────────┤
│ auth │ fork │ online │ 0 │ 0%  │ 28.8 MB    │
│ back │ fork │ online │ 0 │ 0%  │ 103.9 MB   │
└──────┴──────┴────────┴───┴─────┴────────────┘
```

Si deseamos hacer un restart a uno de los 2 procesos usaremos:

```bash
$ pm2 restart back
┌──────┬──────┬────────┬───┬─────┬────────────┐
│ Name │ mode │ status │ ↺ │ cpu │ memory     │
├──────┼──────┼────────┼───┼─────┼────────────┤
│ auth │ fork │ online │ 0 │ 0%  │ 28.8 MB    │
│ back │ fork │ online │ 1 │ 0%  │ 10.9 MB    │
└──────┴──────┴────────┴───┴─────┴────────────┘
```

Podemos ver que nuestro proceso `back` acaba de sufrir un reset (podemos verlo en la cuarta columna de la tabla de salida)

Ahora, si utilizamos reload, que diferencia visual tenemos?

```bash
$ pm2 reload back
Use --update-env to update environment variables
[PM2] Applying action reloadProcessId on app [back](ids: 1)
[PM2] [back](1) ✓
```

Y verificamos que nuestro daemon ha sufrido un restart:

```bash
$ pm2 ls
┌──────┬──────┬────────┬───┬─────┬────────────┐
│ Name │ mode │ status │ ↺ │ cpu │ memory     │
├──────┼──────┼────────┼───┼─────┼────────────┤
│ auth │ fork │ online │ 0 │ 0%  │ 28.8 MB    │
│ back │ fork │ online │ 2 │ 0%  │ 103.9 MB   │
└──────┴──────┴────────┴───┴─────┴────────────┘
```

### Cuál fué la diferencia?

Según la [documentación](http://pm2.keymetrics.io/docs/usage/cluster-mode/#reload) de pm2 explica que:

> La función reload reiniciará a sus workers uno por uno, y para cada worker, esperará hasta que el nuevo haya levantado antes de matar al anterior.

A diferencia de `restart`, que mata y reinicia el proceso. 

# Conclusión

>Utilizar pm2 reload logra una recarga del daemon con 0 downtime en un ambiente con multiples cores.

Eso es todo por hoy, gracias por leer.

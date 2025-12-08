---
title: 'Apps docker en TrueNAS: Tip para organizar tus apps usando "include"'
summary: "Aprende a mantener tus aplicaciones Docker en TrueNAS más organizadas usando la directiva 'include', evitando pegar archivos docker-compose enormes en el editor de Custom YAML."
date: 2025-12-08T16:09:21+01:00
slug: 'truenas-docker-include-tip'
draft: false
tags: ["truenas", "docker", "apps"]
folders: ["TrueNAS"]
hideTableOfContent: false
---

La biblioteca (o catalog) de TrueNAS es cada vez más rica, tanto que prácticamente cada semana se incluyen nuevas aplicaciones. Pero en ocasiones, hay veces que no encontramos la aplicación que queremos instalar en el catálogo oficial de TrueNAS.

Existe un repositorio de Github donde se van añadiendo nuevas aplicaciones al catálogo oficial de TrueNAS, y que cualquiera puede añadir nuevas sugerencias de aplicaciones para que sean incluidas en el catálogo oficial (a través de una nueva Issue).

Te dejo por aquí el enlace: https://github.com/truenas/apps 😉

# Opciones para instalar aplicaciones Docker en TrueNAS

Para estos casos, TrueNAS nos permite instalar aplicaciones Docker a través de dos formas:

1. Un contenedor personalizado (*Custom App*):

    ![Ubicación botón "Custom App"](custom-app-location.png)

2. Un contenedor a través de un archivo `docker-compose.yml` (*Install via YAML*). En este post nos centraremos en esta opción:

    ![Ubicación botón "Custom YAML"](custom-yaml-location.png)

Cuando seleccionamos la última opción (*Install via YAML*), TrueNAS nos abre un editor de texto donde podemos pegar el contenido del archivo `docker-compose.yml` que queramos usar para desplegar nuestra aplicación. Sin embargo, hay veces que este archivo puede ser muy largo o complejo, y puede ser difícil de manejar en el editor de TrueNAS.

En mis inicios con TrueNAS lo que hacía era modificar el archivo `docker-compose.yml` que ofrece cada aplicación para adaptarlo al editor de TrueNAS. Pero con el tiempo descubrí que hay una forma mucho más sencilla y elegante de hacerlo, y que es además el motivo de este post: **utilizar la directiva** `include`.

# El tip: usar la directiva `include` en la interfaz de TrueNAS

La directiva `include` nos permite incluir el contenido de otro archivo YAML dentro de nuestro archivo `docker-compose.yml`. De esta forma, podemos tener un archivo principal muy sencillo y limpio, que simplemente hace referencia a nuestro archivo de configuración real (por muy complejo que sea).

Por ejemplo, supongamos que queremos instalar una aplicación (*Kimai* por ejemplo), en lugar de copiar y pegar todo el contenido de este archivo en el editor de TrueNAS, podemos descargar el archivo `docker-compose.yml` en un dataset de nuestro TrueNAS (por ejemplo, en `/mnt/Vault/Apps/Kimai/docker-compose.yml`), y luego hacer referencia a este archivo desde el editor de TrueNAS utilizando la directiva `include` de la siguiente manera:

![Referencia a docker-compose utilizando la directiva 'include'](truenas-install-via-yaml-include-reference.png)

> ⚠️ Recuerda que la ruta debe ser absoluta y accesible desde TrueNAS

De esta forma, el archivo que pegamos en el editor de TrueNAS es muy sencillo y limpio, y nos permite gestionar el archivo `docker-compose.yml` real de forma independiente y más cómoda, lo que nos ofrece varias ventajas:
- Tener el archivo `docker-compose.yml` **tal y como lo ofrece el desarrollador** de la aplicación, sin necesidad de modificarlo para adaptarlo al editor de TrueNAS.
- Gestionar el archivo `docker-compose.yml` con nuestro **editor de texto favorito**, con resaltado de sintaxis, autocompletado, indentación automática, etc.
- **Tener el archivo `.env`** de la aplicación (si lo incluye) en el mismo directorio que el archivo `docker-compose.yml`, lo que facilita la gestión de las variables de entorno y credenciales.
- Podemos tener el archivo `docker-compose.yml` y los datos de la aplicación en un mismo dataset, lo que nos permite **crear snapshots y hacer rollbacks** de la versión de la aplicación junto a los datos si fuera necesario.

# Cómo organizo mis aplicaciones Docker en TrueNAS

Por si te interesa, aquí te dejo la estructura que utilizo en cada uno de mis datasets de aplicaciones Docker en TrueNAS:

```bash
/mnt/vault/apps/miapp/
├── docker-compose.yml
├── .env
├── folder1/ # Volumen 1 de la aplicación
├── folder2/ # Volumen 2 de la aplicación
└── ... # Más volúmenes/datos si la aplicación los necesita
```

> Mantener la misma estructura para todas las aplicaciones Docker que instalo en TrueNAS me ayuda a tener todo más organizado y fácil de gestionar.

---

Espero que este pequeño tip te sea útil y te ayude a gestionar mejor tus aplicaciones Docker en TrueNAS. ¡Nos vemos en el próximo post! 🚀
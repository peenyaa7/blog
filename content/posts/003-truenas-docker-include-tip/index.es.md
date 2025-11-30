---
title: '003 Truenas Docker Include Tip'
summary: ''
date: 2025-11-30T19:19:21+01:00
slug: ''
draft: true
tags: []
folders: [] # Max 1 folder
hideTableOfContent: false
---

El catalog (o biblioteca) de TrueNAS es cada vez más rica, tanto que prácticamente cada semana se incluyen nuevas aplicaciones. Por si quieres echar un ojo al repositorio de Github donde se añaden las aplicaciones, o incluso, quieres añadir una nueva sugerencia para añadir una nueva aplicación (a través de una Pull Request), te dejo por aquí el enlace: https://github.com/truenas/apps 😉

A pesar de ello, hay veces que no encontramos la aplicación que queremos instalar en el catálogo. Para estos casos, TrueNAS nos permite instalar aplicaciones Docker a través de dos formas:
1. Un contenedor personalizado ("Custom App"):

    ![Ubicación botón "Custom App"](custom-app-location.png)

2. Un contenedor a través de un archivo `docker-compose.yml` ("Custom YAML"):

    ![Ubicación botón "Custom YAML"](custom-yaml-location.png)

Ambas opciones son muy interesantes, pero en este post me gustaría centrarme en la segunda opción, ya que es la que más uso y la que más me gusta.

Cuando seleccionamos la opción de "Custom YAML", TrueNAS nos abre un editor de texto donde podemos pegar el contenido del archivo `docker-compose.yml` que queramos usar para desplegar nuestra aplicación. Sin embargo, hay veces que este archivo puede ser muy largo o complejo, y puede ser difícil de manejar en el editor de TrueNAS.

En mis inicios con TrueNAS lo que hacía era modificar el archivo `docker-compose.yml` que ofrece cada aplicación y adaptarlo para que fuera fácilmente gestionable desde el editor de TrueNAS. Pero con el tiempo descubrí que hay una forma mucho más sencilla y elegante de hacerlo, y que es además el motivo de este post: **utilizar la directiva** `include`.

La directiva `include` nos permite incluir el contenido de otro archivo YAML dentro de nuestro archivo `docker-compose.yml`. De esta forma, podemos tener un archivo principal muy sencillo y limpio, que simplemente hace referencia a nuestro archivo de configuración real (por muy complejo que sea).

Por ejemplo, supongamos que queremos instalar una aplicación llamada "MiApp" que tiene un archivo `docker-compose.yml` complejo. En lugar de pegar todo el contenido de este archivo en el editor de TrueNAS, podemos descargar el archivo `docker-compose.yml` en un dataset de nuestro TrueNAS (por ejemplo, en `/mnt/vault/apps/miapp/docker-compose.yml`), y luego hacer referencia a este archivo desde el editor de TrueNAS utilizando la directiva `include` de la siguiente manera:

```yaml
include:
  - /mnt/vault/apps/miapp/docker-compose.yml
```

De esta forma, el archivo que pegamos en el editor de TrueNAS es muy sencillo y limpio, y podemos gestionar el archivo real de configuración de nuestra aplicación de forma independiente y más cómoda, lo que nos permite:
- Tener el archivo `docker-compose.yml` tal y como lo ofrece el desarrollador de la aplicación, sin necesidad de modificarlo para adaptarlo al editor de TrueNAS.
- Gestionar el archivo `docker-compose.yml` con nuestro editor de texto favorito, con resaltado de sintaxis, autocompletado, indentación automática, etc.
- Tener el archivo `.env` de la aplicación (si lo incluye) en el mismo directorio que el archivo `docker-compose.yml`, lo que facilita la gestión de las variables de entorno y credenciales.
- Utilizar las snapshots y backups de TrueNAS para proteger tanto el dataset donde se encuentra el archivo `docker-compose.yml` como el dataset donde se encuentran los datos de la aplicación (muy necesario en caso de que queramos hacer rollback después de una actualización fallida, por ejemplo).

Por si te interesa, aquí te dejo la estructura que utilizo en cada uno de mis datasets de aplicaciones Docker en TrueNAS:

```bash
/mnt/vault/apps/miapp/
├── docker-compose.yml
├── .env
├── folder1/ # Volumen 1 de la aplicación
├── folder2/ # Volumen 2 de la aplicación
└── ... # Más volúmenes/datos si la aplicación los necesita
```

Espero que este pequeño tip te sea útil y te ayude a gestionar mejor tus aplicaciones Docker en TrueNAS. ¡Nos vemos en el próximo post! 🚀
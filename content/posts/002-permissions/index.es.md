---
title: '002 Permissions'
summary: ''
date: 2025-11-13T20:11:52+01:00
slug: ''
draft: true
tags: []
folders: [] # Max 1 folder
hideTableOfContent: false
---

Los permisos es una de las cosas más fáciles de explicar y de entender cuando empiezas en el mundo de los sistemas de archivos, pero también es el causante de la gran mayoría de los problemas cuando compartimos carpetas en red o cuando instalamos una nueva aplicación en nuestro TrueNAS, así que veamos una breve explicación de cada uno de ellos.

# Permisos UNIX

Estos permisos son los más sencillos de aplicar y por tanto, los más fáciles de entender. Y seguramente, si has jugado alguna vez con sistemas Unix, te hayas cruzado con ellos al listar el contenido de un directorio:

```bash
# Permissions   User        Group       File
-rwxrw----      peenyaa7    devteam     myfile.txt
```

La primera columna del comando `ls` muestra los permisos de cada archivo y se dividen de la siguiente manera:

![unix-permissions-structure](unix-permissions-structure.png)

Como ves, estos permisos se dividen en cuatro partes:
1. `Type` -> El tipo de archivo. Los más comunes son `-` (archivo normal), `d` (directorio) y `l` (enlace simbólico). Puedes encontrar la lista completa [aqui](https://en.wikipedia.org/wiki/Unix_file_types#Symbolic).
2. `User` -> Los permisos del usuario propietario (`peenyaa7`) en formato `rwx`.
3. `Group` -> Los permisos del grupo propietario (`devteam`) en formato `rwx`.
4. `Others` -> Los permisos de los demás usuarios, también en formato `rwx`.

Cada conjunto de permisos (`rwx`) se compone de tres letras que representan los siguientes permisos básicos:

| Permiso   | Significado                     |
|-----------|---------------------------------|
| `r`       | Lectura                         |
| `w`       | Escritura                       |
| `x`       | Ejecución/Acceso a carpeta      |

En TrueNAS podemos ver estos tipos de permisos con la siguiente interfaz:

![Interfaz permisos Unix en TrueNAS](unix-truenas-interface.png)

## Ventajas y desventajas

Las ventajas y desventajas de utilizar este tipo de permisos son:

| ✅ Ventajas | ❌ Desventajas |
|-------------|-----------------|
| Simples y rápidos | Solo puedes tener un propietario y un grupo. |
| Funcionan en cualquier sistema UNIX o Linux. | No puedes dar permisos a usuarios específicos adicionales. |
 
# Permisos POSIX ACL

Los permisos POSIX (*Portable Operating System Interface*) es una estándar de la IEEE basado en los permisos UNIX, y como te puedes imaginar, **extienden** el funcionamiento de los mismos.

¿Qué añaden? Además de tener la funcionalidad de los permisos UNIX (`rwxrw----`), son capaces de establecer permisos específicos a cada usuario o grupo de forma independiente, lo que conocemos como ACL (*Access Control List*)

````bash
user::rwx       # Usuario propietario con todos los permisos (rwx)
group::r-x      # Grupo propietario con lectura y ejecución
other::---      # Los demás no tienen permisos de ningún tipo
user:javi:rw-   # Usuario 'javi' con permisos especiales de lectura y escritura
group:devs:r–-  # Grupo 'devs' con permisos especiales (solo lectura)
````

En TrueNAS, puedes ver y editar estos permisos desde la interfaz web:

![Interfaz de POSIX ACL en TrueNAS](posix-truenas-interface.png)

## Ventajas y desventajas

| ✅ Ventajas | ❌ Desventajas |
|-------------|-----------------|
| Mucho más flexibles. | Más difíciles de leer y entender. |
| Permiten permisos personalizados por usuario o grupo. | Algunos servicios solo usan los permisos UNIX e ignoran las ACL. |
| Compatibles con entornos SMB (Windows). |  |

# Permisos NFSv4 ACL

Los permisos NFSv4 (*Network File System v4*) ACL son una evolución más moderna y se utilizan en entornos más complejos, de hecho, es la opción más avanzada dentro del mundo UNIX/TrueNAS. Además de definir qué puedes hacer, también definen **cuándo y cómo** heredar esos permisos.

Están inspirados en el modelo de permisos de Windows (NTFS), con permisos mucho más específicos y entradas de tipo `ALLOW`/`DENY`.

Cada entrada o ACE (*Access Control Entry*) de una ACL NFSv4 sigue la siguiente estructura:

```bash
# Estructura ACE:
type:flags:principal:permissions

# Ejemplo de una ACL NFSv4:
A:d:peenyaa7@example.es:rwaDxtTnNcCy
A:fd:foxy@example.es:rwaDxtTnNcCy
A:fi:zazu@example.es:rwaDxtTnNcCy
A::OWNER@:rwaDxtTnNcCy
A:g:GROUP@:rxaDxtTnNcCy
A::EVERYONE@:rxtTnNcCy
```

En TrueNAS, puedes ver y editar estos permisos desde la interfaz web, en la sección de permisos avanzados de cada dataset o carpeta compartida:

![Interfaz de NFSv4 ACL en TrueNAS](nfsv4-truenas-interface.png)

Para explicar cada parte voy a dividir cada parte en pequeñas secciones para que se entienda mejor 😁

## ACE Type (`type`)

Indica el tipo de ACE que se va a definir, puede ser:
- `A` (Access), `D` (Deny), `U` (Audit) o `L` (Alarm)

## ACE Flags (`flags`)

Indica las marcas ACE que agregan contexto adicional a la ACL. Definen cómo se aplican los permisos y si se heredan o no. Las marcas ACE son:

| Flag | Nombre | Significado |
|------|--------|-------------|
| `f`  | file-inherit | Los **archivos** nuevos tendrán las mismas marcas ACE (`type`, `principal` y `permissions`) excluyendo las marcas de herencia (`flags`). |
| `d`  | directory-inherit  | Los **subdirectorios** tendrán las mismas marcas ACE (`type`, `flags`, `principal` y `permissions`). |
| `n`  | no-propagate-inherit | Los **subdirectorios** tendrán las mismas marcas ACE (`type`, `principal` y `permissions`) excluyendo las marcas de herencia (`flags`). |
| `i`  | inherit-only | Los **archivos** y **subdirectorios** heredarán las mismas marcas ACE (`type`, `flags`, `principal` y `permissions`) pero esta ACE tendrá los `flags` a null. Se utiliza para crear "plantillas" de permisos que heredarán los hijos. |

> Las marcas de herencia (`flags`) estarán **vacias** si el `principal` es un `principal` especial (`OWNER@` u `EVERYONE@`).
> 
> En el caso de que el `principal` sea un **grupo** (`GROUP@` o `group@example.com`), se añadirá la marca `g` (group) a las `flags`. 

## ACE Principal (`principal`)

El `principal` es el usuario o grupo al que está asociada la regla actual (ACE). El `principal` puede ser uno de los siguientes:

| Tipo de principal        | Significado                          |
|------------------|--------------------------------------|
| Usuario específico (`user@example.es`) | Usuario específico al que se le asignan los permisos. |
| Grupo específico (`group@examples.es`) | Grupo específico al que se le asignan los permisos. |
| Usuario propietario (`OWNER@`) | Principal especial. Permisos del usuario propietario. |
| Grupo propietario (`GROUP@`) | Principal especial. Permisos del grupo propietario. |
| Cualquier usuario (`EVERYONE@`) | Principal especial. Permisos de cualquier usuario. |

## ACE Permissions (`permissions`)

Por último, los `permissions` indican el acceso del `principal`. Cada permiso se define con una sola letra:


| Letra | Permiso para archivos | Permiso para carpetas |
|-------|----------------------|-----------------------|
| `r`   | Leer el contenido del archivo | Listar el contenido de la carpeta |
| `w`   | Escribe contenido en un archivo | Crear archivos en una carpeta |
| `a`   | Añadir datos al final del archivo | Crear subcarpetas dentro de una carpeta |
| `x`   | Ejecutar el archivo (si es ejecutable) | Acceder a la carpeta y sus subcarpetas |
| `d`   | Borrar el archivo | Borrar la carpeta |
| `D`   | ❌ *No aplica* | Borrar el contenido de la carpeta (archivos y subcarpetas) |
| `t`   | Leer los atributos del archivo como permisos básicos (no ACLs), propietario, tamaño, etc. | Leer los atributos de la carpeta |
| `T`   | Modificar los atributos del archivo | Modificar los atributos de la carpeta |
| `n`     | Leer los "named attributes", que son metadatos adicionales personalizos (no siempre están presentes) | Leer los "named attributes" de la carpeta |
| `N`     | Modificar los "named attributes" | Modificar los "named attributes" de la carpeta |
| `c`     | Leer la ACL del archivo | Leer la ACL de la carpeta |
| `C`     | Modificar la ACL del archivo | Modificar la ACL de la carpeta |
| `o`     | Modificar el propietario del archivo | Modificar el propietario de la carpeta |

Existen alias (`R`, `W` y `X`) que pueden ser utilizados para simplificar la escritura de permisos, y que funcionan de forma similar a los permisos POSIX ACL:

| Alias | Equivalente completo |
|-------|----------------------|
| `R`   | `rntcy`              |
| `W`   | `waDtTNcCy`          |
| `X`   | `xtcy`               |

## Ventajas y desventajas

| ✅ Ventajas | ❌ Desventajas |
|-------------|-----------------|
| Herencia real de permisos. | Las más difíciles de leer y entender. |
| Control muy granular. | Pueden romperse si se cambian los permisos desde la CLI |
| Traducción directa al modelo de Windows (NTFS). |  |
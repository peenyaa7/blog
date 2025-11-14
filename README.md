Este es el repositorio del [blog personal](https://blog.peenyaa.dev) construido con [Hugo](https://gohugo.io/) y desplegado automáticamente con **GitHub Actions** en **GitHub Pages**.

[TOC]

## Requisitos

- Hugo extended (versión ≥ 0.110 recomendada).

## Estructura del proyecto

```bash
.
├── archetypes/     # Plantillas de nuevos posts
├── content/        # Contenido en markdown (posts, páginas, etc.)
├── layouts/        # Overrides de plantillas del tema
├── static/         # Archivos estáticos (imágenes, CSS extra, etc.)
├── themes/         # Tema de Hugo usado
├── config.toml     # Configuración principal de Hugo
└── .github/
    └── workflows/  # CI/CD con GitHub Actions
```

## Crear un nuevo post

Crea una nueva rama:

```bash
git checkout -b posts/0XX-nombre-del-post
```

Y ejecuta en local:

```bash
hugo new posts/0XX-nombre-del-post/index.es.md
```

Esto creará un archivo en `content/posts/` con el *frontmatter* configurado y en la rama asociada 👌.

## Desarrollo local

Para levantar un servidor local con recarga automática:

    hugo server -D

El blog estará disponible en http://localhost:1313

## Despliegue

Cada vez que se hace `push` a la rama `main`, GitHub Actions:
1. Construye el sitio con Hugo.
2. Publica el contenido generado en la rama `gh-pages`.
3. Ejecuta los scripts de OpenGraph para generar las portadas de los posts de forma dinámica y en multidioma.
4. GitHub Pages sirve el contenido en [blog.peenyaa.dev](https://blog.peenyaa.dev).

El flujo de despliegue está definido en `.github/workflows/hugo.yml`.

## Licencia

Este proyecto está bajo licencia MIT.  
Eres libre de usar el código como referencia para tus propios proyectos.
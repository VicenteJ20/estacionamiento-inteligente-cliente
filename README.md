# Estacionamiento Inteligente

Este repositorio contiene la aplicación cliente que utilizaremos para llevar a cabo el proyecto. Así también, se encuentran ficheros de configuración de servicios adicionales, como docker-compose que se utiliza para configurar un contenedor de MariaDB en docker. Y también, PRISMA que es un ORM que nos permite generar modelos y posteriormente migraciones para que todos trabajemos con una base de datos en igualdad de condiciones aún cuando estemos trabajando en local.

## Primeros pasos

A continuación se listan algunos pasos requeridos para ejecutar la app correctamente, también se pueden omitir los que están marcados, ya que, pueden ser sustituidos por servidores cloud u otro medio.

## 1) Configurando el entorno de desarrollo

#### Instalar NodeJS 20 o superior
---

Puede descargase e instalarse desde la web oficial en el siguiente link:

[Descargar NODEJS 20 o superior desde la web oficial](https://nodejs.org/es)

En caso de encontrarse utilizando un sistema operativo Linux, ya sea basado en Debian, Arch o RHEL, para obtener un paquete actualizado de NodeJS es necesario acceder a NodeSource y seguir los pasos para la instalación en la distro correspondiente:

[Descargar NODEJS 20 o superior desde NodeSource](https://github.com/nodesource/distributions)

#### Escoger gestor de paquetes

Por defecto, al instalar NodeJS tanto desde la web oficial como de nodesource, vendrá acompañado de NPM, el cual es el gestor de paquetes por defecto de NodeJS. Sin embargo, este gestor de paquetes es lento y medianamente inserguro frente a sus competidores como Yarn y PNPM.

El gestor de paquetes utilizado para trabajar con este proyecto es PNPM, el cual se puede descargar e instalar desde el siguiente enlace:

[Descarga PNPM](https://pnpm.io/)

Este gestor de paquetes representa algunas mejoras importantes debido a como maneja internamente los archivos en disco, pueden encontrar más información [Aquí](https://pnpm.io/motivation)


## 2) Instalar Docker Engine (opcional)

Este paso es opcional, si no se quiere instalar Docker basta con instalar los servicios externos a la app en el propio equipo (host) o en una máquina en la nube.

En este caso, el servicio adicional es MariaDB, es importante utilizar MariaDB y NO MySQL debido a las licencias privativas de esta última.

### Descarga de Docker Engine y Docker Hub

Para descargar Docker solo hace falta dirigirse al siguiente enlace y seguir los pasos de la documentación oficial: [DESCARGAR DOCKER WINDOWS](https://docs.docker.com/desktop/install/windows-install/) O [DESCARGAR DOCKER LINUX](https://docs.docker.com/desktop/install/linux-install/) en este último caso está disponible para Ubuntu, Fedora y Debian (Free).

### Configuración extra (Windows)

En el caso de Windows es necesario tener activa la característica de máquina virtual y el Subsistema de Windows para Linux en su versión 2.0.

La guía oficial, se encuentra a continuación:

- [MICROSOFT: ACTIVAR WSL2](https://learn.microsoft.com/en-us/windows/wsl/install)
- [DOCKER: WSL 2 en Windows](https://docs.docker.com/desktop/wsl/)


## 3) Ejecutar el proyecto.

Para esto es necesario contar con NodeJS y PNPM y hacer lo siguiente:

- Entrar en la ruta raíz del proyecto (a la misma altura del package.json).
- Ejecutar Docker Engine (opcional).
- Abrir una nueva terminal y ejecutar:
- ```docker compose up```

Esto dejará corriendo el contenedor en base a las especificaciones escritas en el archivo **docker-compose.yml**

Finalmente solo es necesario situarse en la raíz del proyecto desde una terminal y escribir lo siguiente:

```pnpm next dev```

## IMPORTANTE

Crear ramas en github asociadas a lo que se hará con la siguiente nomenclatura:

- feat/algo => utilizar cuando se agregue una nueva característica.
- fix/algo => utilizar cuando se corrija o edite un archivo preexistente.

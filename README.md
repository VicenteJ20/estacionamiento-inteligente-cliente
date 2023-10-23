# Estacionamiento Inteligente

Este repositorio contiene la aplicación cliente que utilizaremos para llevar a cabo el proyecto. Así también, se encuentran ficheros de configuración de servicios adicionales, como docker-compose que se utiliza para configurar un contenedor de MariaDB en docker. Y también, PRISMA que es un ORM que nos permite generar modelos y posteriormente migraciones para que todos trabajemos con una base de datos en igualdad de condiciones aún cuando estemos trabajando en local.

## Primeros pasos

### 1) Configurando el entorno de desarrollo

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
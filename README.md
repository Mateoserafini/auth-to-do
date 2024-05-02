# Auth To-Do

Este proyecto es un sistema de inicio de sesión de usuarios creado con React, JWT, Tailwind, Express y MongoDB. Los usuarios pueden registrarse, iniciar sesión y acceder a funciones restringidas del sistema una vez autenticados.

## Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Requisitos](#requisitos)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Configuración](#configuración)
7. [Tecnologías Utilizadas](#tecnologías-utilizadas)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

## Descripción General

Este proyecto es un sistema de autenticación y gestión de tareas. Utiliza React para la interfaz de usuario, Tailwind para el diseño, JWT para la autenticación, Express para el servidor y MongoDB como base de datos.

## Requisitos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

- Node.js y npm
- MongoDB funcionando y configurado
- Git

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio:

    ```shell
    git clone https://github.com/Mateoserafini/auth-to-do.git
    ```

2. Navega al directorio del proyecto:

    ```shell
    cd auth-to-do
    ```

3. Instala las dependencias para el backend:

    ```shell
    cd backend
    npm install
    ```

4. Instala las dependencias para el frontend:

    ```shell
    cd frontend
    npm install
    ```

## Uso

Para ejecutar el proyecto, sigue los pasos a continuación:

1. Inicia el servidor backend:

    ```shell
    cd backend
    npm start
    ```

2. Inicia la aplicación frontend:

    ```shell
    cd frontend
    npm start
    ```

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `backend/`: Contiene el código del servidor basado en Express.
- `frontend/`: Contiene el código de la interfaz de usuario basada en React.
- `database/`: Contiene scripts para la base de datos (si es necesario).
- Otros archivos de configuración y documentación.

## Configuración

- `backend/config.js`: Configura las variables de entorno, la conexión a la base de datos y las claves JWT.
- `frontend/.env`: Configura las variables de entorno para la aplicación frontend.

## Tecnologías Utilizadas

- **React**: Para la interfaz de usuario.
- **Tailwind**: Framework CSS para el diseño de la interfaz.
- **Express**: Framework para el servidor HTTP.
- **MongoDB**: Base de datos NoSQL.
- **JWT**: Para la autenticación de usuarios.

## Contribuciones

Este proyecto acepta contribuciones. Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza tus cambios y haz commit.
4. Envía un pull request con una descripción clara de tus cambios.

## Licencia

Este proyecto es de uso libre. Puedes utilizar, modificar y distribuir el código sin restricciones.

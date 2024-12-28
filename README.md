# Proyecto de Gestión de Usuarios y Tareas

Este proyecto es una aplicación full-stack que permite gestionar usuarios y tareas asignadas a esos usuarios. La aplicación consta de un backend desarrollado con NestJS y un frontend desarrollado con React.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Ejecución](#ejecución)
- [Endpoints de la API](#endpoints-de-la-api)
- [Interfaz Gráfica](#interfaz-gráfica)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- MongoDB (o PostgreSQL)

## Instalación

### Backend

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio/backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la base de datos:

   Crea un archivo `.env` en la raíz del proyecto backend y añade la configuración de la base de datos:

   ```env
   MONGO_URI=mongodb://localhost:27017/nest
   ```

4. Ejecuta el servidor:

   ```bash
   npm run start
   ```

### Frontend

1. Navega al directorio del frontend:

   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:

   ```bash
   npm start
   ```

## Ejecución

1. Asegúrate de que el servidor backend esté en ejecución.
2. Ejecuta la aplicación frontend.
3. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Endpoints de la API

### Usuarios

- `GET /users`: Obtener todos los usuarios.
- `POST /users`: Crear un nuevo usuario.
- `PUT /users/:id`: Actualizar un usuario existente.
- `DELETE /users/:id`: Eliminar un usuario.

### Tareas

- `GET /tasks`: Obtener todas las tareas.
- `POST /tasks`: Crear una nueva tarea.
- `PUT /tasks/:id`: Actualizar una tarea existente.
- `DELETE /tasks/:id`: Eliminar una tarea.

## Interfaz Gráfica

La interfaz gráfica permite:

- Ver una lista de usuarios.
- Ver los detalles de un usuario y las tareas asignadas a ese usuario.
- Agregar, editar y eliminar usuarios y tareas.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
```

Este `README.md` proporciona una visión general del proyecto, instrucciones de instalación y ejecución, una descripción de los endpoints de la API, y detalles sobre la interfaz gráfica. También incluye secciones para contribuciones y licencia. 

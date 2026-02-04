
# Backend III: Testing y Escalabilidad Backend

## Curso Coderhouse 

  - Comisión 94425 - Del 12/11/25 al 15/01/26
  - Alumno:  Carlos Alfredo santa Cruz
  - Profe:  Maximiliano Sebastian Martin  - Adjunto o Tutor: Maximiliano Salas
  - Miércoles  de 20:30 a 22:30h

---
## Adoption API 

Proyecto backend desarrollado con **Node.js, Express y MongoDB**, orientado a la gestión de usuarios, mascotas y adopciones.

---
## Objetivo de la entrega

Partiendo de un proyecto dado en clase: 
https://github.com/CoderContenidos/RecursosBackend-Adoptme

Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.

Mover el endpoint “/mockingpets” (Desarrollado en el primer Desafío Entregable) dentro de este router.

Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. 
Dichos usuarios generados deberán tener las siguientes características:

En “password” debe tener la contraseña “coder123” encriptada.

“role” puede variar entre “user” y “admin”.

“pets” debe ir como array vacío.

Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado “/mockingusers”, y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.

Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los parámetros numéricos “users” y “pets” para generar e insertar en la base de datos la cantidad de registros indicados.

Comprobar dichos registros insertados mediante los servicios GET de users y pets
 
---

## Estructura del Proyecto   📁 

```
SantaCruz-Comision94425-entrega01/
¦   package-lock.json
¦   package.json
¦   README.md
¦   .env                     # Variables de entorno del proyecto
¦   .env_copy                # Copia de respaldo del archivo .env
¦              
+---src
    ¦
    +-- app.js                   # Punto de entrada: inicializa servidor y middlewares
    ¦
    +-- config                   # Configuración general.  Variables de entorno, DB y Swagger
    ¦   +-- db.js                # Conexión a MongoDB con Mongoose
    ¦   +-- envs.js              # Carga y centraliza variables de entorno
    ¦
    +-- controllers              # Lógica  de negocio. Control de las rutas
    ¦   +-- adoptions.controller.js  # Controlador de adopciones
    ¦   +-- mocking.controller.js    # Controlador de datos mock
    ¦   +-- pets.controller.js       # Controlador de mascotas
    ¦   +-- sessions.controller.js   # Controlador de sesiones / auth
    ¦   +-- users.controller.js      # Controlador de usuarios
    ¦
    +-- dao                      # Acceso a datos (Data Access Object)
    ¦   +-- Adoption.js          # DAO de adopciones
    ¦   +-- Pets.dao.js          # DAO de mascotas
    ¦   +-- Users.dao.js         # DAO de usuarios
    ¦   ¦
    ¦   +-- models               # Modelos de Mongoose
    ¦       +-- Adoption.js      # Esquema de adopciones
    ¦       +-- Pet.js           # Esquema de mascotas
    ¦       +-- User.js          # Esquema de usuarios
    ¦
    +-- dto                      # Data Transfer Objects
    ¦   +-- Pet.dto.js           # Normalización de datos de mascotas
    ¦   +-- User.dto.js          # Normalización de datos de usuarios
    ¦
    +-- mocks                    # Generación de datos de prueba
    ¦   +-- pets.mocks.js        # Mock de mascotas
    ¦   +-- users.mocks.js       # Mock de usuarios
    ¦
    +-- public                   # Archivos públicos estáticos
    ¦   +-- img                  # Imágenes públicas
    ¦   +-- index.html           # Pagina estática inicial
    ¦
    +-- repository               # Reglas de persistencia. Capa de abstracción entre servicios y DAO
    ¦   +-- AdoptionRepository.js # Repositorio de adopciones 
    ¦   +-- GenericRepository.js  # Repositorio base reutilizable
    ¦   +-- PetRepository.js      # Repositorio de mascotas
    ¦   +-- UserRepository.js     # Repositorio de usuarios
    ¦
    +-- routes                   # Definición de endpoints de la API
    ¦   +-- adoption.router.js   # Rutas de adopciones
    ¦   +-- mocks.router.js      # Rutas de mocking
    ¦   +-- pets.router.js       # Rutas de mascotas
    ¦   +-- sessions.router.js   # Rutas de sesiones / auth
    ¦   +-- users.router.js      # Rutas de usuarios
    ¦
    +-- services                 #  Servicios compartidos
    ¦   +-- index.js             # Exportación y registro de servicios
    ¦
    +-- utils                    # Utilidades comunes
        +-- index.js             # Helpers generales
        +-- uploader.js          # Configuración de subida de archivos (multer)                
¦              
+---test/
    ¦
    +-- adoption.test.js # Tests funcionales
```

##  Endpoints de la API

### user (`/api/users`)  👨‍👩‍👧‍👦

  - `GET  /api/users`         -lista los usuarios
  - `POST /api/users`


### Pets (`/api/pets`)   🐶🐱

  - `GET  /api/pets`  - Lee todas las mascotas (Pets) cargadas
  - `POST /api/pets`

### Adoptions   🐶🐱
- `GET /api/adoptions`
- `POST /api/adoptions`

### Documentacion con Swagger

- `http://localhost:8080/api/docs`

**Ejemplos:**
```bash
  GET http://localhost:8080/api/users/
```

### Mocks (`/api/mocks`)
  - GET  /api/mocks/mockingpets  - Genera 100 mascotas random con faker y las muestra
  - GET  /api/mocks/mockingusers - Genera 50 usuarios random con faker y los muestra
  - POST /api/mocks/generateData - Crea una "cant" de pets y users ingresados desde el body

---

## Documentación Swagger   📚 

Disponible en:

http://localhost:8080/api/docs


---

## Tests   🧪 

Ejecutar:

```bash
npm test


Incluye tests funcionales para el router de adopciones.

?? Configuración

Clonar el repositorio

Instalar dependencias:  npm install

Configurar .env  (cambiar nombre de .env_copy por .env)

Levantar servidor: npm start

?? Docker 

Ejecutar :
docker build --no-cache -t santacruz-94425 .
docker run -d -p 8080:8080 santacruz-94425

✍️ Autor

Carlos Santa Cruz
Proyecto académico – Backend Node.js

---

### Tecnologías utilizadas  📦 📚

- Arquitectura por capas (Routes, Controllers, DAO, Repository, DTO)

- [Express](https://expressjs.com/): Express es un marco de aplicación web Node.js que proporciona un conjunto de características para aplicaciones web y móviles.
- [Node.js](https://nodejs.org/es): Node.js® es un entorno de ejecución de JavaScript que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comandos y scripts.
- [mongoDB / mongoose](https://www.mongodb.com/es/products/platform/cloud) MongoDB Atlas es una base de datos cloud totalmente gestionada, construida sobre el modelo de documentos
- [bcrypt](https://www.npmjs.com/package/bcrypt):Bcrypt es una función de hash de contraseñas y derivación de claves basada en el cifrado Blowfish
- [cookie-parser](https://www.npmjs.com/package/cookie-parser):cookieParser es un middleware de Express.js que se utiliza para analizar y manejar las cookies que se envían desde el cliente hasta el servidor
- [fakerES](https://fakerjs.dev/):  Generate massive amounts of fake (but realistic) data for testing and development.
- Swagger (OpenAPI)
- Mocha, Chai y Supertest


---
## Instalación  ⚙️

1. Clona el repositorio o crea los archivos del proyecto

2. Instala las dependencias:
```bash
npm install 
```

3. Ejecuta el servidor:
```bash
# npm start
```

5. Luego podrá acceder a la aplicación desde cualquier navegador en **localhost** 

---

# Repositorio GitHub: 
 - SantaCruzCarlos_Backend3_94425_EntregaFinal
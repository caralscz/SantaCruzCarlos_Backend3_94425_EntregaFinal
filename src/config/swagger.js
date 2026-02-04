//
// -----------------------------------------------------------
// src/config/swagger.js
//
// Configuración Swagger
// http://localhost:${envs.port}/api/docs
// ----------------------------------------------------------- 

import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adoption API",
      description: "API para gestión de usuarios, mascotas y adopciones",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"], // donde están las anotaciones
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);

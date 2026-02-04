// -----------------------------------------------------------
// src/app.js
// -----------------------------------------------------------

import express from 'express';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);   // si el campo del query no existe, devuelve TODOS los documentos
//  import {} from "./cluster.js";  // NO importamos el cluster - no es necesario
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from "./config/swagger.js";

import envs from './config/envs.js';
import conectarDB  from './config/db.js';

import path from 'path';  // para los archivos estáticos
const app = express();

app.use(express.json());
app.use(cookieParser());

// archivos estáticos
app.use(express.static(path.join(process.cwd(),'src', 'public')));

// endpoints
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// === Levantamos el servidor 
const startServer = async () => {
  try {
    await conectarDB(envs.mongo_db, envs.db_name);

    app.listen(envs.port, () => {
        console.log(' ');
        console.log('😊 Todo listo ');
        console.log(` Home      :    http://localhost:${envs.port}/`);
        console.log(' ');
        console.log(' endpoints ');
        console.log(`  GET:  http://localhost:${envs.port}/api/mocks/mockingpets`);
        console.log(`  GET:  http://localhost:${envs.port}/api/mocks/mockingusers`);
        console.log(`  POST: /api/mocks/generateData`);
        console.log(' ');
        console.log(`  API users:     http://localhost:${envs.port}/api/users`);
        console.log(`  API pets :     http://localhost:${envs.port}/api/pets`);
        console.log(' ');

    });

  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
    process.exit(1);
  }
};

startServer();

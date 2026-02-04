//
// -----------------------------------------------------------
// src/config/envs.js
//
// Por las dudas, coloco como default los valores verdaderos
// Esto es sólo porque es un proyecto de estudio
//
// ----------------------------------------------------------- 
import dotenv from 'dotenv';
dotenv.config();

const envs = {
  // # usado en app.js cuando hacemos el listen del servidor
  port: process.env.PORT || 8080,   // default: escuchar en 8080

  // # usado en app.js 
  mongo_db: process.env.MONGO_DB || "mongodb+srv://sczcaral_dbCoder:coderdb01@cluster0.7yscrme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

  // # usado en app.js
  db_name: process.env.DB_NAME || "dbSczComision94425"
};

export default envs;

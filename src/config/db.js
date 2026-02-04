// -----------------------------------------------------------
// src/config/db.js
// Conexión a Mongo usando Mongoose, con logs y manejo de errores.
// -----------------------------------------------------------

import mongoose from 'mongoose';

const conectarDB = async (url, dbName) => {
  try {
    await mongoose.connect(url, { dbName });
    console.log('Todo bien por aquí  👍 ')
    console.log(`✅ Conectado a MongoDB: ${dbName}`);
  } catch (err) {
    console.error('❌ Error en db.js, conectando a MongoDB:', err.message);
    process.exit(1);   // Si no se conectó, no continúo 
  }
};

export default conectarDB;
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,        // Dirección del servidor MySQL
    user: process.env.DB_USER,          // Usuario de MySQL
    password: process.env.DB_PASS,   // Contraseña del usuario
    database: process.env.DB_NAME, // Nombre de la base de datos
    waitForConnections: true, // Esperar a que haya conexiones disponibles
    connectionLimit: 10,      // Límite de conexiones en el pool
    queueLimit: 0             // Límite de conexiones en espera (0 = sin límite)
});

const promisePool = pool.promise();

export default promisePool;
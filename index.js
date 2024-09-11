import express from 'express';
import cors from 'cors';
import router from './src/routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(router);

//Primer parámetro es el puerto y el segundo es una función de callback
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});

//localhost:3000
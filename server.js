
import express from 'express';
import connectDB from './src/config/db.js'; 
const app = express();

app.use(express.json());
connectDB();


const PORT = 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor en http://localhost:${PORT}`);
});
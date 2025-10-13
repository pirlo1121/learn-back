# 03 - Conexión a MongoDB

Usaremos MongoDB como base de datos. Para conectarnos desde Node.js utilizaremos Mongoose, una librería que facilita la comunicación con MongoDB.

*Instalamos la dependencia Mongoose* "npm i mongoose"
```bash
npm i mongoose
``` 

- Crear archivo de conexión

En la carpeta config creamos un archivo llamado *db.js*

```javascript

// importamos mongoose para poder conectarnos a la base de datos
import mongoose from 'mongoose';

const conectarDB = async () => { // la funcion debe ser asyncrona
  try {
    await mongoose.connect('mongodb://localhost:27017/mi_app'); // url de la base de datos
    console.log(' Conectado a MongoDB');
  } catch (error) {
    console.log(' Error al conectar a MongoDB', error);
    process.exit(1); // Detiene la app si no hay conexión
  }
};

export default conectarDB; // exportamos la funcion para poder utilizarla en el servidor 

``` 



# 03.1 IMPLEMENTACION DE LA FUNCION ANTERIOR ( CONNECTDB )

*pasamos al servidor ( server.js ) e importamos la función connectDB que acabamos de crear en db.js*

server.js
```javascript

import express from 'express';
import connectDB from './src/config/db.js'; // importamos connecDB
const app = express();

app.use(express.json());

// Aqui utilizamos la funcion para conectarnos a la base de datos
connectDB();


const PORT = 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor en http://localhost:${PORT}`);
});
```

# 03.2 EJECUTAMOS EL SERVIDOR 

*nuevamente lanzamos el comando "nmp run dev" en la terminal*
```bash
    npm run dev
```

*nos deberia salir en la terminal el siguiente mensaje:*
- `Servidor en http://localhost:3000`
- `Servidor en Conectado a MongoDB`

Ya tenemos la conexión a la base de datos lista.

**pasar a src/model/04-model.md**

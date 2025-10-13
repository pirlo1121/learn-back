# 04 - Modelo y Schema 

- ¿Qué son Modelo y Schema?


*Schema (Esquema)*

El Schema es la DEFINICIÓN o PLANTILLA que describe cómo deben ser los datos.

- Piensa en ello como: Los planos de una casa que definen:

    - Cuántas habitaciones debe tener

    - Qué medidas tienen las puertas

    - Dónde van las ventanas

    - Qué materiales se usarán


*Modelo (Model)*

El Modelo es la HERRAMIENTA que usa el Schema para interactuar con la base de datos.

- Piensa en ello como: El constructor que:

    - Usa los planos para construir casas

    - Puede modificar casas existentes

    - Puede demoler casas

    - Puede buscar casas con características específicas


# creamos nuestro archivo js *product.model.js*

En este caso el ejemplo será con un Modelo y Schema de productos


product.model.js:
```javascript
// Importamos mongoose para crear el Schema y el Modelo
import mongoose from 'mongoose';

// creamos el Schema con ( new mongoose.Schema )
const productoSchema = new mongoose.Schema({});
```

* adentro de las llaves definiremos las propiedades de los productos, por ejemplo; nombre, descripcion, precio, cantidad etc...

* ejemplo:
```javascript
import mongoose from 'mongoose';
const productoSchema = new mongoose.Schema({

    name: { // aqui indicamos que nuestros productos deberan tener un nombre
        type: String, // aqui indicamos el tipo de dato, en este caso string
        required: true // aqui decimos que el nombre es obligatorio
    }, 
    // aqui pondriamos las demás propiedades ( description, stock etc...)
});
```

*codigo completo:*
```javascript
// Importamos mongoose para crear el Schema y el Modelo
import mongoose from 'mongoose';

// creamos el Schema y definimos los campos del producto
const productoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // obligatorio
  },
  price: {
    type: Number, // tipo Number
    required: true
  },
  description: {
    type: String
  },
  stock: {
    type: Number,
    default: 0 // stock por defecto será 0
  },
  available: {
    type: Boolean,
    default: true
  }
});

// creamos el Modelo basandonos en el Schema y luego lo exportamos
const Producto = mongoose.model('Producto', productoSchema);
export default Producto; // con el modelo ya podemos crear productos en nuestra base de datos

```

*es decir, ya tendemos un modelo para registrar productos en nuestra base de datos, estos productos tendran propiedades como ( name, price, description, stock, available )*

- un ejemplo de un producto que podriamos guardar en nuestra base de datos

```json
{
    "name": "televisor",
    "price": 600000,
    "description": "televisor LG 60 pulgadas",
    "stock": 12,
    "available": true
}
```

Con eso finalizariamos el modelo de productos!

*pasar a src/routes/05-routes.md*
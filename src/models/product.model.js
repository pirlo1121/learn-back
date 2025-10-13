import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true 
  },
  precio: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    default: 'Sin descripción'
  },
  stock: {
    type: Number,
    default: 0
  },
  disponible: {
    type: Boolean,
    default: true
  }
});

const Producto = mongoose.model('Producto', productoSchema);
export default Producto; 

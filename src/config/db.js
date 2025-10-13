
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mi_app'); 
    console.log(' Conectado a MongoDB');
  } catch (error) {
    console.log(' Error al conectar a MongoDB', error);
    process.exit(1); 
  }
};

export default connectDB;

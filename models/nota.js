import mongoose from 'mongoose';

//funcionalidad de schemas
const Schema = mongoose.Schema;

//estructura del schema
const notaSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  descripcion: String,
  usuarioId: String,
  date:{type: Date, default: Date.now},
  activo: {type: Boolean, default: true}
});

// Convertir a modelo a exportar
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;
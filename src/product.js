const mongoose = require('mongoose')

// Definir el esquema y el modelo de Mongoose
const productoSchema = new mongoose.Schema({
    codigo:Number,
    nombre: String,
    precio: Number,
    categoria: String
  },{ versionKey: false }) //La última versión de mongoose genera automáticamente esta propiedad, la cual se puede simplemente quitar, pero está default
  const Producto = mongoose.model('Producto', productoSchema)

  module.exports = Producto
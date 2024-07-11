const express = require('express')
const app = express()
const morgan = require ('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT ?? 3000
const  connectDB = require ('./src/database.js')
const Producto = require('./src/product.js')

// Conectar a MongoDB usando Mongoose
connectDB()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Ruta principal
app.get('/', (req, res) => {
    res.json('Bienvenido a la API de Productos de Computacion !')
  })

//Mostrar todos los productos o buscar por nombre
  app.get('/productos', (req, res) => {
    const { nombre } = req.query;
    console.log('Nombre:', nombre);
    
  // Busqueda parcial y control de espacios
    const query = nombre ? { nombre: { $regex: nombre.split(' ').join('.*'), $options: 'i' } } : {};
    // Ver la consulta en consola
    console.log('Consulta:', query);
    
    Producto.find(query)
      .then(productos => {
        res.json(productos);
      })
      .catch(error => {
        console.error('Error al obtener los productos', error);
        res.status(500).send('Error al obtener los productos');
      });
  });

//Mostrar un producto por id
app.get('/productos/:id', (req, res) => {
  const { id } = req.params
  Producto.findById(id)
    .then((producto) => {
      if (producto) {
        res.json(producto)
      } else {
        res.status(404).json({ message: 'Producto no encontrado' })
      }
    })
    .catch((error) => {
      console.error('Error al obtener el producto: ', error)
      res.status(500).send('Error al obtener el producto')
    })
})

//Cargar un nuevo producto
app.post('/productos', async (req, res) => {

  // Encuentra el código máximo actual en la base de datos para asignar el siguiente valor a 'codigo' y evitar que en caso de eliminar un elemento se puedan repetir codigos con un contador normal
  const maxProduct = await Producto.findOne().sort({ codigo: -1 });
    
  // Asigna el siguiente valor de 'codigo' basado en el valor máximo encontrado
  const nextCodigo = maxProduct ? maxProduct.codigo + 1 : 1;

  //Crea el nuevo producto y se le asigna el valor a 'codigo'
  const nuevoProducto = new Producto({ codigo: nextCodigo, ...req.body  })

  try {
    await nuevoProducto.save()
    res.status(201).json({message: 'El producto fue creado exitosamente', nuevoProducto})
  } catch (error) {
    res.status(500).send('Error al agregar la película')
  }
})

//Modificar un producto existente
app.patch('/productos/:id', (req, res) => {
  const { id } = req.params

  Producto.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .then((productoActualizado) => {
      if (productoActualizado) {
        res.json({ message: 'Producto actualizado con exito', productoActualizado })
      } else {
        res.status(404).json({ message: 'Producto no encontrado' })
      }
    })
    .catch((error) => {
      console.error('Error al modificar el producto: ', error)
      res.status(500).send('Error al modificar el producto')
    })
})

//Elmiminar un producto
app.delete('/productos/:id', (req, res) => {
  const { id } = req.params

  Producto.findByIdAndDelete(id)
    .then((resultado) => {
      if (resultado) {
        res.json({ message: 'Producto borrado con exito' })
      } else {
        res.status(404).json({ message: 'Producto no encontrado' })
      }
    })
    .catch((error) => {
      console.error('Error al borrar el producto: ', error)
      res.status(500).send('Error al borrar el producto')
    })
})

//Para rutas inexistentes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' })
})

//Inicializamos el servidor
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })
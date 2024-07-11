# Proyecto Integrador: CRUD con Node.js y MongoDB

## Profesores: 
   - [FabioDrizZt](https://github.com/FabioDrizZt)
   - [JuanNebbia](https://github.com/JuanNebbia)
   - [NKrein](https://github.com/NKrein)
   - [mathiasbarbosa](https://github.com/mathiasbarbosa)
  
## Alumno:
   - [ivopalomeque](https://github.com/ivopalomeque)

## Requisitos antes de empezar
   - Contar con una cuenta de MongoDB
   - Contar con la aplicación de MongoDB Compass para mayor comodidad
   - Contar con Visual Studio Code
   - Crear una base de datos en MongoDB y subir el archivo `.json`

## Instalación y configuración del proyecto
   - `npm init -y`
   - `npm install express mongodb morgan mongoose`

# Configurar el archivo package.json
   - Agragamos `"start": "node --watch app.js"` dentro de "scripts":{}

# Modificación del archivo .env copy
   - Cambiar su nombre a `.env`
   - Dentro nos vamos a encontrar con `MONGODB_URLSTRING = mongodb+srv://nombredeusuario:contraseña@cluster0.3m1hc5c.mongodb.net/` donde tendremos que cambiar `nombredeusuario` por nuestro usuario de mongodb y en `contraseña` tendremos que poner la clave que se nos proporcione para conectar con MongoDB Compass
   - Luego nos encontraremos con `DATABASE_NAME` donde tendremos que colocar el nombre de nuestra base de datos. Y `COLLECTION_NAME` donde tendremos que colocar el nombre de nuestra colección

## Descripción del Proyecto

Este proyecto consiste en una aplicación basada en Node.js y MongoDB que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos. La base de datos MongoDB está generada en el clúster de mongodb.com y la aplicación Node.js se conecta a ella.

## Dataset Utilizado

- `computacion.json`: Productos de computación, partes, accesorios y repuestos.

## Funcionalidades del CRUD

1. `Imprime todos los productos`
   - Endpoint para leer todos los productos de la colección.
   - Control de errores para manejar la indisponibilidad de la base de datos.

2. `Busca un producto por ID`
   - Endpoint para obtener un producto por su ID.
   - Control de errores para manejar casos en que el producto no se encuentre o la base de datos no esté disponible.

3. `Busqueda por filtro`
   - Endpoint para filtrar productos por nombre (búsqueda parcial).
   - Control de errores para manejar coincidencias no encontradas o problemas de conexión.

4. `Agrega nuevos productos`
   - Endpoint para agregar un nuevo producto.
   - Validación y control de errores.
   - Generación de un código numérico para el nuevo producto.

5. `Permite modificar el precio de un producto`
   - Endpoint para cambiar el precio de un producto usando PATCH.
   - Control de errores para manejar problemas durante la actualización.
     
6. `Permite borrar un producto`
   - Endpoint para borrar un producto usando DELETE.
   - Control de errores para manejar problemas durante el borrado.

7. `Control de errores`
   - Manejo de errores en la estructura de las solicitudes y respuestas.
   - Respuesta adecuada con mensajes y códigos de error específicos.
   - Control de acceso a rutas no existentes con respuestas apropiadas.

## Estructura del Repositorio

```plaintext
/json
  - computacion.json
/src
  - /database.js
  - /product.js
/README.md
/app.js
/api.http
```

### Descripción de Archivos

- `/json`: Carpeta que contiene el archivo JSON incorporado en la base de datos.
- `/README.md`: Archivo con la descripción del proyecto.
- `/app.js`: Archivo principal de la aplicación Node.js donde se define toda la lógica de rutas y la conexión a la base de datos.
- `/database.js`: Archivo para configurar la conexión a la base de datos MongoDB.
- `/product.js`: Archivo que contiene el esquema (schema) del producto utilizando Mongoose.
- `/.env copy`: Copia modificable del archivo .env a utilizar
- `/.api.http`: Archivo utilizado para realizar las consultas

---

Proyecto integrador de la Diplomatura Backend de la UNTREF
   Fecha: Julio 2024
   Desarrollador: Ivo Palomeque

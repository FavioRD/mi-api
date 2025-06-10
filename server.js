const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Habilitar CORS para permitir solicitudes desde otros orígenes
app.use(cors());

// Middleware para leer JSON en el cuerpo de las solicitudes
app.use(express.json());

// Datos simulados
let productos = [
  { id: 1, nombre: "Camiseta", precio: 25 },
  { id: 2, nombre: "Pantalón", precio: 40 }
];

// Inicializar ID autoincremental
let ultimoId = productos.length ? Math.max(...productos.map(p => p.id)) : 0;

// GET todos los productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// GET producto por ID
app.get('/api/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id == req.params.id);
  producto
    ? res.json(producto)
    : res.status(404).json({ mensaje: 'Producto no encontrado' });
});

// POST nuevo producto con ID autoincremental
app.post('/api/productos', (req, res) => {
  ultimoId += 1;
  const nuevo = { id: ultimoId, ...req.body };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

// DELETE producto
app.delete('/api/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const existe = productos.some(p => p.id === id);

  if (!existe) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  productos = productos.filter(p => p.id !== id);
  res.json({ mensaje: 'Producto eliminado' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

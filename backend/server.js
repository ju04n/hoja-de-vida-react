const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err));

// Contacto
const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  servicio: String,
  mensaje: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

const Contacto = mongoose.model('Contacto', contactoSchema);

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend funcionando' });
});

// Guardar contacto
app.post('/contacto', async (req, res) => {
  try {
    const contacto = new Contacto(req.body);
    await contacto.save();

    res.status(201).json({
      mensaje: 'Mensaje guardado correctamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al guardar el mensaje'
    });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path'); // Importa el módulo 'path'
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ajusta la ruta a la carpeta 'public'
});

// Ruta "Sobre Nosotros"
router.get('/sobre_nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre_nosotros.html')); // Ajusta la ruta
});

// Ruta "Contacto"
router.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacto.html')); // Ajusta la ruta
});

module.exports = router;
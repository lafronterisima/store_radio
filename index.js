
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz para prueba
app.get('/', (req, res) => {
    res.send("Servidor funcionando ✅");
});

// Endpoint para devolver el JSON completo
app.get('/radios', (req, res) => {
    const filePath = path.join(__dirname, 'radios.json');
    res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

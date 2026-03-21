const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Servir los archivos JSON de forma estática
app.use('/static', express.static(path.join(__dirname, 'data')));

app.get('/clientes', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'clientes.json'));
});

app.get('/launcher', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'launcher.json'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

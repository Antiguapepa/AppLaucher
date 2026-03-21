const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Ruta de prueba (RAÍZ) - Entrá a https://applaucher.onrender.com/ para ver esto
app.get('/', (req, res) => {
    res.send('<h1>Servidor AppLaucher en línea</h1>');
});

// Ruta de Clientes
app.get('/clientes', (req, res) => {
    // IMPORTANTE: Verifica que la carpeta se llame 'data' y el archivo 'Clientes.json' en GitHub
    const filePath = path.join(__dirname, 'data', 'Clientes.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error al enviar Clientes.json:", err);
            res.status(404).send("Archivo Clientes.json no encontrado en el servidor");
        }
    });
});

// Ruta de Launcher
app.get('/launcher', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'Laucher.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error al enviar Laucher.json:", err);
            res.status(404).send("Archivo Laucher.json no encontrado en el servidor");
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

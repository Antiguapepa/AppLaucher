const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Ruta para Clientes (C mayúscula y J mayúscula como me pasaste)
app.get('/clientes', (req, res) => {
    const filePath = path.join(__dirname, 'Clientes.Json');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error al buscar Clientes.Json:", err);
            res.status(404).send("No se encontró Clientes.Json en la raíz del repo");
        }
    });
});

// Ruta para Launcher (L mayúscula y j minúscula como me pasaste)
app.get('/launcher', (req, res) => {
    const filePath = path.join(__dirname, 'Laucher.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error al buscar Laucher.json:", err);
            res.status(404).send("No se encontró Laucher.json en la raíz del repo");
        }
    });
});

// Ruta raíz para probar que el servidor vive
app.get('/', (req, res) => {
    res.send('<h1>Servidor AppLaucher Activo</h1><p>Usa /clientes o /launcher</p>');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchando en http://localhost:${port}`);
});
console.log('Servidor iniciado en el puerto', port);


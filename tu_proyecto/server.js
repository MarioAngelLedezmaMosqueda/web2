const express = require("express");
const app = express();
const port = 3099;
const routes = require("./routes");

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Usar las rutas definidas en routes.js
app.use("/", routes);

app.listen(port, () => {
    console.log(`Servidor en escucha desde http://localhost:${port}`);
});
const express =require('express');
const app =express();
const port = 3000;

//middleware para parsear JSON
app.use(express.json());

//importar rutas
const studentRoutes = require('./routes/student.routes');

//rutas
app.use('/api/students' , studentRoutes);

app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
});
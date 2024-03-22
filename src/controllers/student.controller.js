const connection =require('../config/db');

//obtener todos los estudiantes

exports.getStudents =(req, res) => {
    const query = 'SELECT * FROM students';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

//estudiante por id

exports.getStudentById = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM students WHERE id = ?';
    connection.query(query, [id], (err, result) =>{
        if(err) throw err;
        res.json(result[0]);
    });
};

//crear nuevo estudiante

exports.createStudent = (req, res) => {
    const {nombre, email, telefono } = req.body;
    const query =' INSERT INTO students (nombre, email, telefono) VALUES (?, ?, ?)';
    connection.query(query, [nombre, email, telefono], (err, result) => {
        if(err) throw err;
        res.json({message:' Estudiante creado existosamente'});
    });
};

//actualizar estudainte por id

exports.updateStudent = (req, res) => {
    const id = req.params.id;
    const {nombre, email, telefono } = req.body;
    const query = 'UPDATE students SET nombre = ?, email = ?, telefono = ?, WHERE id = ?';
    connection.query(query, [nombre, email, telefono, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Estudiante actualizado exitosamente'});
    });
};

// eliminar estudiante por id 

exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM students WHERE id = ?';
    connection.query(query, [id], (err,result) =>{
        if (err) throw err;
        res.json({ message:' Estudiante eliminado existosamente'});
    });
};
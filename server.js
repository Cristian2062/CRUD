const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Cris:Contraseña123@cluster0.o2wta.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server corriendo la maraton') });
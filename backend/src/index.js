const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-zrvgn.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true
});

app.use(routes);

app.listen(3333);

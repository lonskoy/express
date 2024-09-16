const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const booksRouter = require('./routes/booksRouter');
const booksRouterAPI = require('./routes/booksRouterAPI');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use('/api', booksRouterAPI);
app.use('/', booksRouter);
app.use(express.static('public')); // настраиваем статичную папку для загрузки файлов с сервера

const start = async() => {
    try {
        mongoose.connect(
            process.env.BDCONNECT
        );
        console.log('Подключение к БД прошло успешно!')
    } catch (error) {
        console.log(`Ошибка подключения к БД:  ${error}`)
    }
}

start();

module.exports = app;
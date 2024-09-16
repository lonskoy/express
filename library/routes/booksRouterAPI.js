const express = require('express')
const BooksControllerApi = require('../controllres/booksControllerAPI.js')
const router = express.Router()

const booksControllerApi = new BooksControllerApi;

router.get('/api/books/:id/download', booksControllerApi.bookDownLoad.bind(booksControllerApi))

module.exports = router
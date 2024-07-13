import Book from '../../models/books.model.js'

export const homepage = async (req, res) => {
    const library = await Book.find()
    res.render('index', {title: 'Библиотека', library})
} 
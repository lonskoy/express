import Book from '../models/books.model.js'

export const allBooks = async(req, res) => {
    const library = await Book.find()
    res.send(JSON.stringify(library)).end()
}
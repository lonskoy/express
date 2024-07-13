import Book from "../../models/books.model.js";

export const deletePage = async (req, res) => {
  const { id } = req.params;

    const findBook = await Book.findOne({id})
    await Book.deleteOne(findBook._id)

    const library = await Book.find()

    res.render('index', {title: 'Библиотека', library: library})

}
import Book from "../../models/books.model.js";

export const viewPage = async (req, res) => {
  const { id } = req.params;
  const findBook = await Book.findOne({id});
    res.render('view', {findBook: findBook, title: findBook.title})
}

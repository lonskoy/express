import Book from "../../models/books.model.js";

export const updatePage = async (req, res) => {
  const { id } = req.params;
  const findBook = await Book.findOne({id});
  res.render('update', {findBook: findBook, title: 'Редактирование книги'})
};

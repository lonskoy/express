import Book from "../models/books.model.js";

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const findBook = await Book.findById(id)
    if (!findBook) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Книга не найдена!" }))
        .end();
    }
    await Book.findByIdAndDelete(id)
    res.status(204).end();
  } catch (error) {
    res
      .status(500)
      .send(
        JSON.stringify({
          message: "Ошибка сервера!",
        })
      )
      .end();
  }
};

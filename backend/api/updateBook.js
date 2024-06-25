import Book from "../models/books.model.js";

export const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const findBook = await Book.findById(id)
    if (!findBook) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Книга не найдена!" }))
        .end();
    }
    await Book.findByIdAndUpdate(id, {
        id: id,
        title: 'ИЗМЕНЕННЫЙ ЗАГОЛОВОК'
    })
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

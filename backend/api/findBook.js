import Book from "../models/books.model.js";

export const findBook = async (req, res) => {
  const { id } = req.params;
  try {
    const findBook = await Book.findById(id);
    if (!findBook) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Книга не найдена!" }))
        .end();
    }
    res.status(200).send(JSON.stringify({ findBook })).end();
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

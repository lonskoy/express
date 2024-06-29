import Book from "../models/books.model.js";
import fs from "fs";

export const downloadBook = async (req, res) => {
  const { id } = req.params;
  try {
    const findBook = await Book.findById(id);
    if (!findBook) {
      return res.status(404).json({ message: "Книга не найдена!" });
    }

    const filePath = findBook.fileBook; 
    if (!filePath || !fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Файл книги не найден!" });
    }

    res.download(filePath, `${findBook.title}.pdf`, (err) => {  
      if (err) {
        return res.status(500).json({ message: "Ошибка при загрузке файла!" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера!" });
  }
};
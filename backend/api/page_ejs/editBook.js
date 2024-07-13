import Book from "../../models/books.model.js";

export const editBook = async (req, res) => {
  const { id } = req.params;
  console.log(req)
  const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const findBook = await Book.findOne({id})
    await Book.findByIdAndUpdate(findBook._id, {
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    })

    const library = await Book.find()

    res.render('index', {title: 'Библиотека', library: library})

  }
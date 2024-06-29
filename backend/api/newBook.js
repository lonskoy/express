import { v4 as uuidv4 } from 'uuid';
import Book from '../models/books.model.js'

export  const newBook = async(req, res) => {
    const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;

    if (!title || !description || !authors || !fileCover || !fileName) {  // Валидация данных
        return res.status(400).json({ error: 'Все поля должны быть заполнены' });
    }

    const id = uuidv4();  // Генерация ID
    const newPost = { id, title, description, authors, favorite, fileCover, fileName, fileBook };
    const newPostDoc = new Book(newPost);

    try {
        const savedPost = await newPostDoc.save();
        console.log('Данные записаны в БД');
        res.status(201).json(savedPost); // Отправка успешного ответа
    } catch (error) {
        console.log('Ошибка записи данных в БД', error);
        res.status(500).json({ error: 'Ошибка записи данных в БД' });
    }
}
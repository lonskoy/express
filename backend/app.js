// Подключение пакетов
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";


// Подключение API REST
import { newBook } from "./api/newBook.js";    
import { allBooks } from "./api/allBooks.js";
import { findBook } from "./api/findBook.js";
import { deleteBook } from "./api/deleteBook.js";
import { updateBook } from "./api/updateBook.js";


// Подключение Middleware
import { uploadFile } from "./middleware/uploadFile.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(__dirname));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const port = 3000;
const login = { id: 1, mail: "test@mail.ru" };

router.post("/user/login", async (req, res) => {
  // авторизация пользователя
  res.status(200).json(login);
});

router.post("/books", uploadFile, newBook); // создать новую книгу

router.get("/books", allBooks); // получить все книги

router.get("/books/:id", findBook); // найти книгу по id

// router.get("/books/download/:id", downloadBook); // найти книгу по id и скачать ее

router.put('/books/:id', updateBook); // редактирование книги
 
router.delete("/books/:id", deleteBook); //удалить книгу



const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lonskoy0304:QeV6cIoPj2x5Y3K6@cluster0.lb8c1lp.mongodb.net/express?retryWrites=true&w=majority"
    );
    console.log("Подключение к БД успешно");
    app.listen(port, () => {
      console.log(`Слушаю порт: ${port}`);
    });
  } catch (error) {
    console.log("Ошибка подключения к БД", error);
  }
};

start();

// пароль mongoDB QeV6cIoPj2x5Y3K6

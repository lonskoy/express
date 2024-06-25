import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { newBook } from "./api/newBook.js";
import { allBooks } from "./api/allBooks.js";
import { findBook } from "./api/findBook.js";
import { deleteBook } from "./api/deleteBook.js";
import { updateBook } from "./api/updateBook.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;
const login = { id: 1, mail: "test@mail.ru" };

app.post("/api/user/login", async (req, res) => {
  // авторизация пользователя
  res.status(200).json(login);
});

app.post("/api/books", newBook); // создать новую книгу

app.get("/api/books", allBooks); // получить все книги

app.get("/api/books/:id", findBook); // найти книгу по id

app.put('/api/books/:id', updateBook); // редактирование книги
 
app.delete("/api/books/:id", deleteBook); //удалить книгу

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

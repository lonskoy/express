import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Определяем хранилище для multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Директория для временного сохранения файлов
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Создаем экземпляр multer с заданным хранилищем
const uploadMulter = multer({ storage });

// Middleware для загрузки файла
export function uploadFile(req, res, next) {
  uploadMulter.single('fileBook')(req, res, (err) => {
    if (err) {
      return res.status(500).send('Ошибка загрузки файла!');
    }

    const { fileBook } = req.file;

    if (!fileBook) {
      return res.status(400).send('Путь к файлу указан не верно!');
    }

    const fileName = path.basename(fileBook);
    const destination = path.join(__dirname, 'uploads', fileName);

    // Перемещаем файл в нужное место
    fs.rename(req.file.path, destination, (err) => {
      if (err) {
        return res.status(500).send('Ошибка перемещения файла!');
      }

      req.file = {
        path: destination,
        originalname: fileName
      };

      next();
    });
  });
}
import multer from "multer";
import path from "path";

// Определяем хранилище для multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); // Директория для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Создаем экземпляр multer с заданным хранилищем
const uploadMulter = multer({storage});

// Middleware для загрузки файла
export function uploadFile(req, res, next) {
  uploadMulter.single(req.fileBook)(req, res, function (err) {
    if (err) {
      // Обработка ошибок при загрузке
      return res.status(500).send('Произошла ошибка при загрузке файла.');
    }
    // Продолжаем выполнение следующего middleware или маршрута
    console.log(`Добавлен файл ${req.fileBook}`)
    next();
  });
}
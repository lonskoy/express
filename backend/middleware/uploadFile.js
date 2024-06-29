import multer from "multer";

// Определяем хранилище для multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Директория для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Создаем экземпляр multer с заданным хранилищем
const upload = multer({ storage: storage });

// Middleware для загрузки файла
export function uploadFile(req, res, next) {
  upload.single('file')(req, res, function (err) {
    if (err) {
      // Обработка ошибок при загрузке
      return res.status(500).send('Произошла ошибка при загрузке файла.');
    }
    // Продолжаем выполнение следующего middleware или маршрута
    next();
  });
}
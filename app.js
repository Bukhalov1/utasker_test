const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

// Указываем папку для статических файлов
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/main.html'));
});



// Запускаем сервер
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3005;

// // Указываем папку для статических файлов
// app.use(express.static('public'));

// // Главная страница
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/main.html'));
// });



// // Запускаем сервер
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3005;

// Подключаем MongoDB
mongoose.connect('mongodb://localhost:27017/utasker_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB подключен'))
  .catch(err => console.error('Ошибка подключения к MongoDB:', err));

// Определяем модель задачи
const Task = mongoose.model('Task', {
    title: String,
    description: String,
    completed: Boolean
});

// Разрешаем JSON в запросах
app.use(express.json());

// Статические файлы
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/main.html'));
});

// API: Получение всех задач
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка при получении задач' });
    }
});

// API: Добавление новой задачи
app.post('/api/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description, completed: false });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка при добавлении задачи' });
    }
});

// Запускаем сервер
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

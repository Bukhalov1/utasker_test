
document.querySelector('.airdrop-page').addEventListener('click', function() {
    // Находим ссылку и выполняем переход
    window.location.href = 'game.html';
});

document.querySelector('.profile-page').addEventListener('click', function() {
    // Находим ссылку и выполняем переход
    window.location.href = 'profile.html';
});

document.querySelector('.task-page').addEventListener('click', function() {
    // Находим ссылку и выполняем переход
    window.location.href = 'main.html';
});

// Загрузка заданий
async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    const list = document.querySelector('.tasks__list');
    const templateItem = document.querySelector('.tasks-item.template');
    
    // Удаляем класс template, чтобы элементы не отображались как шаблон
    templateItem.classList.remove('template');

    list.innerHTML = "";  // Очищаем текущий список
    
    tasks.forEach(task => {
        // Клонируем элемент из шаблона
        const item = templateItem.cloneNode(true);
        
        // Заполняем данными
        item.querySelector('.task-placeholder-image').src = './img/svg/task-placeholder-image.svg'; // или task.image, если есть
        item.querySelector('.tasks-item__heading').textContent = task.Title;
        item.querySelector('.tasks-item__balance-value').textContent = task.reward;
        item.querySelector('.tasks-item__description').textContent = task.Description;
        
        // Добавляем в список
        list.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", loadTasks);


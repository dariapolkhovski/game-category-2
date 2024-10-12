// Переменные для хранения состояния игры
let categories = [
    "Напитки",
    "Популярная еда в России",
    "Сети быстрого питания",
    "Сладости",
    "Специи, приятности, приправы",
    "Фрукты, ягоды, овощи",
    "Что в холодильнике",

    "Завтра будет…",
    "Лучшие друзья никогда не…",
    "Мой начальник …",
    "Моя собака…",
    "Пахнет как…",
    "Я чувствую себя…",

    "Известные кинофразы",
    "Мультфильмы и мультсериалы",
    "Реалити шоу",
    "Фильмы",
    "Сериалы",

    "Города",
    "Известные ученые и изобретатели",
    "Исторические люди",
    "Минералы, драгоценные камни, камни и т.д",
    "Достопримечательности",
    "Столицы",
    "Страны",
    "Типично русские вещи",
    "Школьные предметы и занятия",
    "Языки",
    "Вещи из космоса",

    "Млекопитающие",
    "На что бывают аллергии",
    "Насекомые, рептилии, и прочее",
    "Птицы",
    "Рыбы",
    "Цветы",
    "Части человеческого тела",
    "Элементы периодической таблицы",

    "Музыкальные инструменты",
    "Актеры и актрисы",
    "Музыкальные исполнители и группы",
    "Стили музыки",

    "Все для дня рождения",
    "Из чего сделаны предметы",
    "Инструменты",
    "Марки автомобилей",
    "Мебель",
    "Места, куда я хотел бы пойти",
    "Офисные и школьные принадлежности",
    "Профессии",
    "Типы транспорта",
    "Холодные вещи",
    "Электроника и гаджеты",

    "Женские имена",
    "Мужские имена",
    "Слова с буквами «ор» в конце",
    "Слова с буквами «ст» в конце",
    "Слова с буквой «ы»",
    "Слова с буквой «ь»",
    "Слова с удвоенными согласными",

    "Виды спорта",
    "Вещи в ванной",
    "Вещи которые вешают на стену",
    "Вещи которые кладут в карман",
    "Вещи, которые обычно зеленые",
    "Вещи, которые обычно красные",
    "Детские вещи",
    "Круглые вещи",
    "Липкие вещи",
    "Любовь - какая?",
    "Романтические вещи",
    "Свадебные вещи"
];
let selectedCategories = [];
let selectedLetter = '';
let timerInterval;
let timeLeft = 60;

// Функции переключения экранов
function showScreen(screenId) {
    document.querySelectorAll('div').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Функция выбора категорий
function selectCategories() {
    shuffleArray(categories);
    selectedCategories = categories.slice(0, 5);
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';
    selectedCategories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoriesDiv.appendChild(categoryElement);
    });
}

// Функция выбора буквы
function selectLetter() {
    const alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    selectedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const letterWheel = document.getElementById('letter-wheel');
    letterWheel.textContent = Выбранная буква: ${selectedLetter};
}

// Таймер для игры
function startTimer() {
    timeLeft = 60;
    const timerDisplay = document.getElementById('timer');
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswers();
        }
    }, 1000);
}

// Проверка ответов
function checkAnswers() {
    // Пример проверки ответов (заглушка)
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Результаты проверки появятся здесь.';
    showScreen('results-screen');
}

// Инициализация игры
document.getElementById('start-button').addEventListener('click', () => {
    showScreen('category-screen');
    selectCategories();
});

document.getElementById('continue-button').addEventListener('click', () => {
    showScreen('letter-screen');
    selectLetter();
});

document.getElementById('start-game-button').addEventListener('click', () => {
    showScreen('game-screen');
    startTimer();
});

document.getElementById('check-answers-button').addEventListener('click', checkAnswers);

document.getElementById('shuffle-categories').addEventListener('click', selectCategories);
document.getElementById('shuffle-letter').addEventListener('click', selectLetter);

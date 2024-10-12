const categories = [
    "משקאות",
    "מאכלים פופולריים",
    "רשתות מזון מהיר",
    "מתוקים",
    "תבלינים ותוספות",
    "פירות, ירקות, ופירות יער",
    "מה שיש במקרר",
    "מחר יהיה...",
    "חברים טובים לעולם לא...",
    "המנהל שלי...",
    "הכלב שלי...",
    "מריח כמו...",
    "אני מרגיש...",
    "סרטים מצוירים וסדרות מצוירות",
    "תוכניות ריאליטי",
    "סרטים",
    "סדרות",
    "ערים",
    "מדענים וממציאים מפורסמים",
    "אנשים היסטוריים",
    "מינרלים, אבני חן ואבנים",
    "אתרי תיירות מפורסמים",
    "בירות",
    "מדינות",
    "דברים טיפוסיים בישראל",
    "מקצועות ולימודים בבית הספר",
    "שפות",
    "דברים מהחלל",
    "יונקים",
    "אלרגיות נפוצות",
    "חרקים, זוחלים ודומיהם",
    "ציפורים",
    "דגים",
    "פרחים",
    "חלקי גוף",
    "יסודות הטבלה המחזורית",
    "כלי נגינה",
    "שחקנים ושחקניות",
    "זמרים ולהקות מוזיקה",
    "סגנונות מוזיקה",
    "כל מה שקשור ליום הולדת",
    "ממה עשויים חפצים",
    "כלי עבודה",
    "מותגי מכוניות",
    "רהיטים",
    "מקומות שארצה ללכת אליהם",
    "ציוד משרדי ובית ספר",
    "מקצועות",
    "סוגי תחבורה",
    "דברים קרים",
    "אלקטרוניקה וגאדג'טים",
    "שמות נשיים",
    "שמות גבריים",
    "מילים שמסתיימות ב-'ור'",
    "מילים עם האות 'י'",
    "מילים עם האות 'רך'",
    "מילים עם אותיות כפולות",
    "סוגי ספורט",
    "דברים שנמצאים בחדר האמבטיה",
    "דברים שתולים על הקיר",
    "דברים ששמים בכיס",
    "דברים שבדרך כלל ירוקים",
    "דברים שבדרך כלל אדומים",
    "דברים לילדים",
    "דברים עגולים",
    "דברים דביקים",
    "מהי אהבה?",
    "דברים רומנטיים",
    "דברים הקשורים לחתונה"
];
// Функция для выбора случайных категорий
function getRandomCategories() {
    let randomCategories = [];
    while (randomCategories.length < 5) {
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];
        if (!randomCategories.includes(randomCategory)) {
            randomCategories.push(randomCategory);
        }
    }
    return randomCategories;
}

// Функция для выбора случайной буквы
function getRandomLetter() {
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

// Функция для начала игры
function startGame() {
    // Очистка предыдущего результата
    document.getElementById('category-list').innerHTML = '';
    
    // Получаем случайные категории
    const randomCategories = getRandomCategories();
    randomCategories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        document.getElementById('category-list').appendChild(li);
    });

    // Получаем случайную букву
    const randomLetter = getRandomLetter();
    document.getElementById('random-letter').textContent = randomLetter;
}

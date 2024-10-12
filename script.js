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

const letters = "אבגדהוזחטיכלמנסעפצקרשת".split("");

document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    const chosenCategories = getRandomCategories(5);
    const chosenLetter = getRandomLetter();

    document.getElementById("categories-container").innerHTML = <h3>קטגוריות:</h3> ${chosenCategories.join(", ")};
    document.getElementById("letter-container").innerHTML = <h3>אות:</h3> ${chosenLetter};
}

function getRandomCategories(num) {
    const shuffled = categories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

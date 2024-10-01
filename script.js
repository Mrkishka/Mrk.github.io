// Пример взаимодействия с пользователем: alert, prompt, confirm

// Пример alert
alert("Привет! Это пример окна alert.");

// Пример prompt
let userName = prompt("Как вас зовут?", "Гость");
alert("Привет, " + userName + "!");

// Пример confirm
let isSure = confirm("Вы уверены, что хотите продолжить?");
if (isSure) {
    alert("Вы выбрали 'Да'.");
} else {
    alert("Вы выбрали 'Нет'.");
}

// Пример циклов и оператора switch

// Пример цикла for
document.body.innerHTML += "<h2>Цикл for</h2>";
for (let i = 1; i <= 5; i++) {
    document.body.innerHTML += "Число: " + i + "<br>";
}

// Пример цикла while
document.body.innerHTML += "<h2>Цикл while</h2>";
let count = 1;
while (count <= 3) {
    document.body.innerHTML += "Цикл while, шаг " + count + "<br>";
    count++;
}

// Пример оператора switch
let day = new Date().getDay(); // Получаем текущий день недели (0 = Воскресенье, 1 = Понедельник и т.д.)
document.body.innerHTML += "<h2>Оператор switch</h2>";
switch (day) {
    case 0:
        document.body.innerHTML += "Сегодня Воскресенье.<br>";
        break;
    case 1:
        document.body.innerHTML += "Сегодня Понедельник.<br>";
        break;
    case 2:
        document.body.innerHTML += "Сегодня Вторник.<br>";
        break;
    case 3:
        document.body.innerHTML += "Сегодня Среда.<br>";
        break;
    case 4:
        document.body.innerHTML += "Сегодня Четверг.<br>";
        break;
    case 5:
        document.body.innerHTML += "Сегодня Пятница.<br>";
        break;
    case 6:
        document.body.innerHTML += "Сегодня Суббота.<br>";
        break;
    default:
        document.body.innerHTML += "Неправильный день.<br>";
}

// Пример функции Function Expression

// Function Expression (Функциональное выражение)
const greet = function (name) {
    return "Привет, " + name + "!";
};

// Использование функции
let greetingMessage = greet(userName);
document.body.innerHTML += "<h2>Пример Function Expression</h2>";
document.body.innerHTML += "<h1>" + greetingMessage + "</h1>";

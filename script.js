// Пример взаимодействия с пользователем: alert, prompt, confirm

// Пример alert
alert("Это кто зашел на ужин?");

// Пример prompt
let userName = prompt("Познакомимся поближе.", "Meele creep");
alert("Ах ты мелкий... " + userName + "!");

// Пример confirm
let isSure = confirm("Фарш не провернуть назад, и мясо из котлет не восстановишь.");
if (isSure) {
    alert("Вы выбрали 'Да'.");
} else {
    alert("Вы выбрали 'Нет'.");
    // Добавление изображения на страницу при ответе "Нет"
    let imageContainer = document.getElementById("image-container");
    let img = document.createElement("img");
    img.src = "https://mrkishka.github.io/mrk.github.io/xzzx.jpg"; // Путь к вашему изображению
    img.alt = "Изображение для ответа 'Нет'";
    img.style.width = "300px"; // Можно задать размер изображения
    imageContainer.appendChild(img);
}

// Добавляем таблицу для второго пункта (циклы и switch)
document.body.innerHTML += "<table><tr><th>Циклы и switch</th></tr>";

// Пример цикла for
let content = "<tr><td><h2>Цикл for</h2>";
for (let i = 1; i <= 5; i++) {
    content += "Число: " + i + "<br>";
}
content += "</td></tr>";

// Пример цикла while
content += "<tr><td><h2>Цикл while</h2>";
let count = 1;
while (count <= 3) {
    content += "Цикл while, шаг " + count + "<br>";
    count++;
}
content += "</td></tr>";

// Пример оператора switch
let day = new Date().getDay(); // Получаем текущий день недели (0 = Воскресенье, 1 = Понедельник и т.д.)
content += "<tr><td><h2>Оператор switch</h2>";
switch (day) {
    case 0:
        content += "Сегодня Воскресенье.<br>";
        break;
    case 1:
        content += "Сегодня Понедельник.<br>";
        break;
    case 2:
        content += "Сегодня Вторник.<br>";
        break;
    case 3:
        content += "Сегодня Среда.<br>";
        break;
    case 4:
        content += "Сегодня Четверг.<br>";
        break;
    case 5:
        content += "Сегодня Пятница.<br>";
        break;
    case 6:
        content += "Сегодня Суббота.<br>";
        break;
    default:
        content += "Неправильный день.<br>";
}
content += "</td></tr>";
document.body.innerHTML += content + "</table>";

// Пример функции Function Expression

// Function Expression (Функциональное выражение)
const greet = function (name) {
    return "Привет, " + name + "!";
};

// Добавляем таблицу для третьего пункта (Function Expression)
document.body.innerHTML += "<table><tr><th>Function Expression</th></tr>";

// Использование функции
let greetingMessage = greet(userName);
document.body.innerHTML += "<tr><td><h2>Пример Function Expression</h2>";
document.body.innerHTML += "<h1>" + greetingMessage + "</h1>";
document.body.innerHTML += "</td></tr></table>";
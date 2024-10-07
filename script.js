// Пример alert
alert('Это кто зашел на ужин?')

// Пример prompt
let userName = prompt('Познакомимся поближе.', 'Meele creep')
alert('Ах ты мелкий... ' + userName + '!')

// Пример confirm
let isSure = confirm(
	'Фарш не провернуть назад, и мясо из котлет не восстановишь.'
)
if (isSure) {
	alert("Вы выбрали 'Да'.")
} else {
	alert("Вы выбрали 'Нет'.")
	let imageContainer = document.getElementById('image-container')
	let img = document.createElement('img')
	img.src = 'https://mrkishka.github.io/mrk.github.io/xzzx.jpg' // Путь к вашему изображению
	img.alt = "Изображение для ответа 'Нет'"
	img.style.width = '500px'
	imageContainer.appendChild(img)
}
document.body.innerHTML += '<table><tr><th>JS</th></tr>'

let content = '<tr><td><h3>Цикл for</h3>'
for (let i = 1; i <= 5; i++) {
	content += '<span style="color: red;">Число: ' + i + '</span><br>'
}
content += '</td></tr>'

content += '<tr><td><h3>Цикл while</h3>'
let count = 1
while (count <= 3) {
	content += '<span style="color: blue;">Цикл while, шаг ' + count + '</span><br>'
	count++
}
content += '</td></tr>'
let day = new Date().getDay()
content += '<tr><td><h3>Оператор switch</h3>'
switch (day) {
	case 0:
		content += '<span style="color: green;">Сегодня на топ.</span><br>'
		break
	case 1:
		content += '<span style="color: green;">Сегодня на мид.</span><br>'
		break
	case 2:
		content += '<span style="color: green;">Сегодня на бот.</span><br>'
		break
	case 3:
		content += '<span style="color: green;">Сегодня в лес.</span><br>'
		break
	case 4:
		content += '<span style="color: green;">Сегодня на Рошана.</span><br>'
		break
	case 5:
		content += '<span style="color: green;">Сегодня под фонтан.</span><br>'
		break
	case 6:
		content += '<span style="color: green;">Сегодня в трон.</span><br>'
		break
	default:
		content += '<span style="color: green;">Пуджа забанили.</span><br>'
}
content += '</td></tr>'
document.body.innerHTML += content + '</table>'

const greet = function (name) {
	return 'О, как мило, ' + name + '!'
}

document.body.innerHTML += '<table><tr><th>Function Expression</th></tr>'

let greetingMessage = greet(userName)
document.body.innerHTML += '<tr><td><h3>' + greetingMessage + '</h3>'
document.body.innerHTML += '</td></tr></table>'

let string = "Ноль";
const stringConstant = "Пятнадцать";

let number = 2;
const numberConstant = 3.14;

let boolean = true;
const booleanConstant = false;

let chinchin = null;
const nullConstant = null;

let undefined;
const undefinedConstant = undefined;

let object = { name: "Staryi Bloh", surname: "Vitalya" };
const objectConstant = { lane: "mid", hero: "IO" };

function mainFunction() {
	let Lvar = 'Нахожусь в зоне комфорта'
	const varconsta = 'Нахожусь в зоне константы'

	function otherFunction() {
		document.getElementById(
			'output'
		).innerHTML += `ФУНКЦИЙ РАБОТАЕТ ВАТАФАК МАЗАФАК Ю НОУ [демонстрация работы вложенной функции otherFunction]<br>`
	}

	otherFunction()
}

mainFunction()

let a = 5
document.getElementById(
	'output'
).innerHTML += `Весь мир - театр, а переменный всего-лишь буквы: <br>`
document.getElementById('output').innerHTML += `a: ${a}<br>`
document.getElementById('output').innerHTML += `++a: ${a++}<br>`
document.getElementById('output').innerHTML += `a++: ${++a}<br>`
document.getElementById('output').innerHTML += `+a: ${+a}<br>`

alert('Нажимая кнопку ОК вы автоматически записываетесь в миротворцы')
let userInput = prompt('Чтобы подписать петицию, напишите ваше имя')
confirm('Вы точно ' + userInput + '?')

for (let i = 0; i < 3; ++i) {
	document.getElementById('output').innerHTML += `Спирали: ${i}<br>`

	let day = i
	switch (day) {
		case 1:
			document.getElementById('output').innerHTML += 'Спирали существуют.<br>'
			break
		case 2:
			document.getElementById('output').innerHTML +=
				'сущессуществуюттвсуществуютуюсуществуютт Спсуществуютирасуществуютли сущессуществуюттвуют.<br>'
			break
		default:
			document.getElementById('output').innerHTML +=
				'Списуществуютрали не сущесуществуютет<br>'
	}
}

const myFunction = function () {
	document.getElementById('output').innerHTML += 'Оборвался на полусло...<br>'
}

myFunction()
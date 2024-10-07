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

let n = 0
const str = 'Нольпятнадцатьдва'
let rur = true
let linad = null
let sheesh
let obj = { name: 'Staryi Bloh' }

function mainFunction() {
	let Lvar = 'Я'
	const varconsta = 'Тоже Я, но в константе'
	otherFunction();
}
function otherFunction() {
	document.getElementById('output').innerHTML += '<span style="color: blue;">Чинчопа чинчопа</span><br>'
}

mainFunction()

let a = 52
document.getElementById('output').innerHTML += `<span style="color: pink;">Циферки мои циферки, люблю свои циферки</span><br>`
document.getElementById('output').innerHTML += `<span style="color: white;">a: ${a}</span><br>`
document.getElementById('output').innerHTML += `<span style="color: yellow;">++a: ${a++}</span><br>`
document.getElementById('output').innerHTML += `<span style="color: red;">a++: ${++a}</span><br>`
document.getElementById('output').innerHTML += `<span style="color: green;">+a: ${+a}</span><br>`

const myFunction = function () {
	document.getElementById('output').innerHTML += '<span style="color: grey;">Дивные циклы идут далее >>></span><br>'
}
myFunction()
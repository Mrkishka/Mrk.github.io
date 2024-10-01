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
document.body.innerHTML += '<table><tr><th>Циклы и switch</th></tr>'

let content = '<table><tr><th>Цикл for</th></tr>'
for (let i = 1; i <= 5; i++) {
	content += 'Число: ' + i + '<br>'
}
content += '</td></tr>'

content += '<table><tr><th>Цикл while</th></tr>'
let count = 1
while (count <= 3) {
	content += 'Цикл while, шаг ' + count + '<br>'
	count++
}
content += '</td></tr>'
let day = new Date().getDay()
content += '<table><tr><th>Оператор switch</th></tr>'
switch (day) {
	case 0:
		content += 'Сегодня на топ.<br>'
		break
	case 1:
		content += 'Сегодня на мид.<br>'
		break
	case 2:
		content += 'Сегодня на бот.<br>'
		break
	case 3:
		content += 'Сегодня в лес.<br>'
		break
	case 4:
		content += 'Сегодня на Рошана.<br>'
		break
	case 5:
		content += 'Сегодня под фонтан.<br>'
		break
	case 6:
		content += 'Сегодня в трон.<br>'
		break
	default:
		content += 'Пуджа забанили.<br>'
}
content += '</td></tr>'
document.body.innerHTML += content + '</table>'

const greet = function (name) {
	return 'О, как мило, ' + name + '!'
}

document.body.innerHTML += '<table><tr><th>Function Expression</th></tr>'

let greetingMessage = greet(userName)
document.body.innerHTML += '<table><tr><th>' + greetingMessage + '</th></tr>'
document.body.innerHTML += '</td></tr></table>'

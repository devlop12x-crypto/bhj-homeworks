// Получаем ссылки на элементы со счетом
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
// Функция для получения лунки по индексу
const getHole = index => document.getElementById(`hole${index}`);
// Функция сброса статистики после окончания игры
const resetGame = () => {
	deadCounter.textContent = 0;
	lostCounter.textContent = 0;
}
// Цикл для регистрации обработчиков событий для каждой из 9 лунок
for(let i = 1; i <= 9; i++) {
	let hole = getHole(i);
	hole.onclick = function() {
		// Проверяем, есть ли в лунке крот (класс hole_has-mole)
		if(hole.className.includes('hole_has-mole')) {
			// Если попали: увеличиваем счетчик убитых
			deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
			// Проверяем условие победы
			if(parseInt(deadCounter.textContent) === 10) {
				alert('Победа! Вы убили 10 кротов!');
				resetGame();
			}
		} else {
			// Если промахнулись: увеличиваем счетчик промахов
			lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
			// Проверяем условие поражения
			if(parseInt(lostCounter.textContent) === 5) {
				alert('Вы проиграли! 5 промахов.');
				resetGame();
			}
		}
	}
}
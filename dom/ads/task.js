// Находим все элементы-ротаторы на странице
const rotators = document.querySelectorAll('.rotator');
// Перебираем каждый ротатор для независимой работы
rotators.forEach((rotator) => {
	// Функция смены слайда
	const changeSlide = () => {
		// Находим текущий активный элемент внутри данного ротатора
		const activeCase = rotator.querySelector('.rotator__case_active');
		// Убираем класс активности [cite: 147]
		activeCase.classList.remove('rotator__case_active');
		// Ищем следующий элемент 
		let nextCase = activeCase.nextElementSibling;
		// Если следующего элемента нет (конец списка), возвращаемся к первому 
		if(!nextCase) {
			nextCase = rotator.firstElementChild;
		}
		// Добавляем класс активности следующему элементу [cite: 147]
		nextCase.classList.add('rotator__case_active');
		// Применяем цвет текста из data-атрибута [cite: 92, 172]
		nextCase.style.color = nextCase.dataset.color;
		// Запускаем таймер с задержкой, указанной в data-speed текущего элемента [cite: 91]
		setTimeout(changeSlide, nextCase.dataset.speed);
	}
	// Запускаем первую смену через 1 секунду
	setTimeout(changeSlide, 1000);
});
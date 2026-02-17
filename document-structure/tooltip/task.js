// Находим все элементы, которым нужна подсказка
const triggers = document.querySelectorAll('.has-tooltip');
triggers.forEach(item => {
	item.addEventListener('click', (event) => {
		// Предотвращаем переход по ссылке
		event.preventDefault();
		// Проверяем, есть ли уже открытая подсказка
		const activeTooltip = document.querySelector('.tooltip');
		// Если подсказка есть, удаляем её [cite: 177, 181]
		if(activeTooltip) {
			const isSameElement = activeTooltip.innerText === item.title;
			activeTooltip.remove(); // Метод remove() для удаления элемента 
			// Если кликнули по тому же элементу, то просто закрываем и выходим (toggle)
			if(isSameElement) {
				return;
			}
		}
		// 1. Создание HTML-элемента div 
		const tooltip = document.createElement('div');
		// Добавляем базовый класс стилей
		tooltip.classList.add('tooltip');
		// 2. Заполняем содержимое текстом из атрибута title [cite: 14]
		// Свойство innerText копирует/устанавливает текст элемента
		tooltip.innerText = item.title;
		// Вычисляем координаты элемента, по которому кликнули
		const {
			left,
			bottom
		} = item.getBoundingClientRect();
		// Задаем позицию подсказки
		tooltip.style.left = left + 'px';
		tooltip.style.top = (bottom + 5) + 'px'; // +5px отступ снизу
		// Добавляем класс активности для отображения
		tooltip.classList.add('tooltip_active');
		// 3. Добавление элемента на страницу 
		// Метод appendChild добавляет узел в конец родительского элемента (body)
		document.body.appendChild(tooltip);
	});
});
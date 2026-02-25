// Находим все элементы с подсказкой
const tooltipElements = document.querySelectorAll('.has-tooltip');
// Создаём один элемент подсказки для всей страницы
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);
// Обрабатываем клик по каждому элементу
tooltipElements.forEach(function(element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		// Получаем текст из атрибута title
		const titleText = element.getAttribute('title');
		// Позиционируем подсказку рядом с элементом
		const rect = element.getBoundingClientRect();
		tooltip.style.left = rect.left + 'px';
		tooltip.style.top = (rect.bottom + 5) + 'px';
		// Если подсказка уже открыта для этого элемента — скрываем
		if(tooltip.classList.contains('tooltip_active') && tooltip.textContent === titleText) {
			tooltip.classList.remove('tooltip_active');
		} else {
			// Показываем подсказку с нужным текстом
			tooltip.textContent = titleText;
			tooltip.classList.add('tooltip_active');
		}
	});
});
// Закрываем подсказку при клике вне элементов
document.addEventListener('click', function(event) {
	if(!event.target.classList.contains('has-tooltip')) {
		tooltip.classList.remove('tooltip_active');
	}
});
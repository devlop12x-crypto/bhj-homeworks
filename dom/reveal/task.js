const checkReveal = function() {
	// Находим все элементы, которые должны плавно появляться [cite: 136]
	const reveals = document.querySelectorAll('.reveal');
	// Получаем текущую высоту видимой области окна браузера [cite: 191, 196]
	const viewportHeight = window.innerHeight;
	for(const reveal of reveals) {
		// Получаем координаты границ элемента относительно окна [cite: 178]
		const {
			top
		} = reveal.getBoundingClientRect();
		// Если верхняя граница элемента вошла в видимую область 
		if(top < viewportHeight) {
			// Добавляем класс для активации анимации появления [cite: 121, 147]
			reveal.classList.add('reveal_active');
		}
	}
};
// Отслеживаем прокрутку страницы пользователем [cite: 204]
window.addEventListener('scroll', checkReveal);
// Запускаем проверку сразу, чтобы обработать элементы в начале страницы
checkReveal();
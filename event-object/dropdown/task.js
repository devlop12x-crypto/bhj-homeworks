// Находим все контейнеры dropdown на странице
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
	// Получаем элементы текущего выпадающего списка
	const value = dropdown.querySelector('.dropdown__value');
	const list = dropdown.querySelector('.dropdown__list');
	const links = dropdown.querySelectorAll('.dropdown__link');
	// Клик по кнопке: сворачивание/разворачивание списка
	value.addEventListener('click', () => {
		list.classList.toggle('dropdown__list_active');
	});
	// Обработка клика по каждому пункту меню
	links.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault(); // Запрещаем переход по ссылке
			value.textContent = link.textContent; // Меняем значение на выбранное
			list.classList.remove('dropdown__list_active'); // Закрываем список
		});
	});
});
// Находим все элементы с классом tab на странице
const tabs = document.querySelectorAll('.tab');
// Перебираем полученную коллекцию и навешиваем обработчик на каждую вкладку
tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		// Находим ближайшего родителя с классом .tabs (контейнер конкретного виджета)
		const tabsContainer = tab.closest('.tabs');
		// Получаем все вкладки и блоки контента внутри этого контейнера
		// Используем Array.from для создания массива, чтобы работал метод indexOf
		const tabsInContainer = Array.from(tabsContainer.querySelectorAll('.tab'));
		const contentsInContainer = Array.from(tabsContainer.querySelectorAll('.tab__content'));
		// Находим индекс кликнутой вкладки в массиве
		const index = tabsInContainer.indexOf(tab);
		// Убираем активные классы со всех вкладок и блоков контента текущего контейнера
		tabsInContainer.forEach(el => el.classList.remove('tab_active'));
		contentsInContainer.forEach(el => el.classList.remove('tab__content_active'));
		// Добавляем активный класс кликнутой вкладке и соответствующему контенту по индексу
		tab.classList.add('tab_active');
		contentsInContainer[index].classList.add('tab__content_active');
	});
});
// Находим все элементы управления размером шрифта
const fontSizes = document.querySelectorAll('.font-size');
// Находим основной элемент с текстом книги
const book = document.getElementById('book');
// Проходимся по каждой кнопке управления
for(const fontSize of fontSizes) {
	fontSize.addEventListener('click', function(event) {
		// Отменяем стандартное действие ссылки (чтобы страница не перезагружалась)
		event.preventDefault();
		// 1. Смена активного класса у кнопок
		// Находим текущую активную кнопку и убираем у неё класс активности
		const activeSize = document.querySelector('.font-size_active');
		activeSize.classList.remove('font-size_active');
		// Добавляем класс активности той кнопке, на которую нажали
		this.classList.add('font-size_active');
		// 2. Изменение размера шрифта у текста
		// Сначала удаляем все классы, отвечающие за размер, чтобы сбросить стиль
		book.classList.remove('book_fs-small', 'book_fs-big');
		// Проверяем data-атрибут нажатой кнопки
		if(this.dataset.size === 'small') {
			// Если кнопка "small", добавляем класс уменьшения
			book.classList.add('book_fs-small');
		} else if(this.dataset.size === 'big') {
			// Если кнопка "big", добавляем класс увеличения
			book.classList.add('book_fs-big');
		}
		// Если data-size нет (средняя кнопка), классы просто удалены, и шрифт станет стандартным
	});
}
// Получаем необходимые элементы из DOM
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');
// Функция добавления задачи
function addTask(event) {
	// Предотвращаем стандартное поведение формы (перезагрузку страницы)
	// Это автоматически обрабатывает и клик по кнопке, и нажатие Enter
	event.preventDefault();
	// Получаем текст из поля ввода и убираем лишние пробелы
	const value = taskInput.value.trim();
	// Если поле пустое, ничего не делаем
	if(!value) {
		return;
	}
	// 1. Создание элемента (см. Конспект Page 7 "Создание элемента страницы")
	// Используем document.createElement, чтобы получить ссылку на конкретный новый узел
	const task = document.createElement('div');
	task.classList.add('task'); // Добавляем класс стилей
	// Формируем внутреннюю структуру (см. Конспект Page 4 "innerHTML")
	// Мы вставляем заголовок с текстом и кнопку удаления
	task.innerHTML = `
      <div class="task__title">${value}</div>
      <a href="#" class="task__remove">&times;</a>
    `;
	// 2. Реализация механизма удаления (см. Конспект Page 10 "Удаление HTML-элементов")
	// Ищем кнопку удаления ТОЛЬКО внутри текущей созданной задачи
	const removeBtn = task.querySelector('.task__remove');
	// Добавляем слушатель события только на эту кнопку
	removeBtn.addEventListener('click', (e) => {
		// Предотвращаем переход по ссылке href="#"
		e.preventDefault();
		// Метод remove() вызывается у элемента для его удаления (Конспект Page 10)
		// Поскольку переменная task доступна здесь через замыкание, мы удаляем именно этот блок
		task.remove();
	});
	// 3. Добавление элемента на страницу (см. Конспект Page 7 "Добавления элемента-потомка")
	// Метод appendChild добавляет узел в конец родительского элемента
	taskList.appendChild(task);
	// Очищаем поле ввода после добавления
	taskInput.value = '';
}
// Вешаем обработчик события 'submit' на форму
// Это позволяет добавлять задачи и по кнопке "Добавить", и по нажатию Enter
taskForm.addEventListener('submit', addTask);
const signinBlock = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
// Функция для переключения интерфейса (скрываем форму, показываем приветствие)
const showWelcome = (userId) => {
	signinBlock.classList.remove('signin_active');
	welcomeBlock.classList.add('welcome_active');
	userIdSpan.textContent = userId;
};
// 1. Проверка при загрузке страницы: есть ли сохраненный ID в LocalStorage?
const savedUserId = localStorage.getItem('user_id');
if(savedUserId) {
	showWelcome(savedUserId);
}
// 2. Обработка отправки формы
form.addEventListener('submit', (event) => {
	// Предотвращаем стандартную отправку формы с перезагрузкой страницы
	event.preventDefault();
	// Собираем данные из формы (современный подход)
	const formData = new FormData(form);
	// Создаем AJAX-запрос
	const xhr = new XMLHttpRequest();
	xhr.open('POST', form.action, true);
	xhr.responseType = 'json';
	xhr.onload = () => {
		if(xhr.status >= 200 && xhr.status < 300) {
			const response = xhr.response;
			if(response.success) {
				// Успешная авторизация
				const userId = response.user_id;
				// Сохраняем user_id в localStorage [cite: 21, 22]
				localStorage.setItem('user_id', userId);
				// Обновляем интерфейс
				showWelcome(userId);
			} else {
				// Сервер вернул {"success": false}
				alert('Неверный логин/пароль');
			}
		} else {
			// Ошибка на уровне HTTP (например, 400 или 500)
			alert('Произошла ошибка при обращении к серверу');
		}
	};
	xhr.onerror = () => {
		alert('Ошибка сети');
	};
	// Отправляем собранные данные формы
	xhr.send(formData);
});
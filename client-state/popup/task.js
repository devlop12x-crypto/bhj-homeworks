const modal = document.getElementById('subscribe-modal');
const closeBtn = modal.querySelector('.modal__close');
// Функция для получения значения куки по имени (на основе логики из конспекта)
const getCookie = (name) => {
	const value = "; " + document.cookie;
	const parts = value.split("; " + name + "=");
	if(parts.length === 2) {
		return parts.pop().split(";").shift();
	}
}
// 1. Проверяем наличие куки при загрузке страницы
// Если куки 'modalClosed' нет (вернется undefined), то показываем окно
if(!getCookie('modalClosed')) {
	modal.classList.add('modal_active');
}
// 2. Обработка закрытия окна
closeBtn.addEventListener('click', () => {
	// Скрываем окно (удаляем класс активности)
	modal.classList.remove('modal_active');
	const date = new Date();
	date.setDate(date.getDate() + 365);
	// Запись в document.cookie добавляет новую куку, не стирая старые
	document.cookie = "modalClosed=true; path=/; expires=" + date.toUTCString();
});
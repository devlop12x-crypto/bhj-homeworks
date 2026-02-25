// Получаем элементы из DOM
const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');
const fileDesc = document.querySelector('.input__wrapper-desc');
// Отображаем имя выбранного файла рядом с кнопкой
fileInput.addEventListener('change', function() {
	fileDesc.textContent = fileInput.files[0] ? fileInput.files[0].name : 'Имя файла...';
});
// Обрабатываем отправку формы
form.addEventListener('submit', function(event) {
	// Предотвращаем стандартную отправку формы
	event.preventDefault();
	// Проверяем, выбран ли файл
	if(!fileInput.files[0]) {
		alert('Пожалуйста, выберите файл');
		return;
	}
	// Кодируем данные формы через FormData для отправки файла
	const formData = new FormData(form);
	// 1. Создаём экземпляр XMLHttpRequest
	const xhr = new XMLHttpRequest();
	// 2. Настраиваем асинхронный POST-запрос
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	// 3. Отслеживаем прогресс закачки через объект xhr.upload
	xhr.upload.onprogress = function(event) {
		// event.loaded — сколько байт уже отправлено
		// event.total — общий размер файла
		if(event.lengthComputable) {
			// Вычисляем долю от 0 до 1 и обновляем прогрессбар
			progress.value = event.loaded / event.total;
		}
	};
	// 4. Обработчик успешного завершения закачки
	xhr.upload.onload = function() {
		progress.value = 1;
		alert('Файл успешно загружен!');
	};
	// 5. Обработчик ошибки при закачке
	xhr.upload.onerror = function() {
		alert('Произошла ошибка при загрузке файла!');
	};
	// 6. Отправляем запрос с данными формы
	xhr.send(formData);
});
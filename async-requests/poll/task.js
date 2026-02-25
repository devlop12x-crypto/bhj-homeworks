// 1. Создаём экземпляр объекта XMLHttpRequest
const xhr = new XMLHttpRequest();
// 2. Настраиваем асинхронный GET-запрос
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
// 3. Отправляем запрос
xhr.send();
// 4. Обрабатываем ответ после завершения запроса
xhr.onreadystatechange = function() {
	// Ждём полного завершения запроса (readyState === 4) и успешного ответа
	if(xhr.readyState === xhr.DONE && xhr.status === 200) {
		// Парсим JSON-ответ от сервера
		const data = JSON.parse(xhr.responseText);
		// Получаем контейнеры из DOM
		const titleEl = document.getElementById('poll__title');
		const answersEl = document.getElementById('poll__answers');
		// 5. Вставляем заголовок опроса
		titleEl.textContent = data.data.title;
		// 6. Создаём кнопку для каждого варианта ответа
		data.data.answers.forEach(function(answerText) {
			const button = document.createElement('button');
			button.classList.add('poll__answer');
			button.textContent = answerText;
			// 7. При клике показываем диалоговое окно
			button.addEventListener('click', function() {
				alert('Спасибо, ваш голос засчитан!');
			});
			// Добавляем кнопку в контейнер ответов
			answersEl.appendChild(button);
		});
	}
};
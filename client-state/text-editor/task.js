// Находим элемент текстового поля по его ID
const editor = document.getElementById('editor');
// 1. Чтение данных из LocalStorage при загрузке страницы
// Используем метод getItem(), передавая ему ключ 'editorContent'
const savedText = localStorage.getItem('editorContent');
// Если в хранилище есть сохранённый текст, помещаем его в редактор
if(savedText) {
	editor.value = savedText;
}
// 2. Запись в LocalStorage при любом изменении текста
editor.addEventListener('input', () => {
	// Сохраняем актуальное значение поля с помощью метода setItem()
	localStorage.setItem('editorContent', editor.value);
});
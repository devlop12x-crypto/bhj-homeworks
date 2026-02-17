// Находим контейнер, где будут лежать товары в корзине
const cartProductsList = document.querySelector('.cart__products');
// Находим все карточки товаров на странице
const products = document.querySelectorAll('.product');
// Перебираем каждый товар, чтобы навесить обработчики событий
products.forEach(product => {
	// 1. Находим элементы управления внутри текущей карточки товара
	const valueElement = product.querySelector('.product__quantity-value');
	const decButton = product.querySelector('.product__quantity-control_dec');
	const incButton = product.querySelector('.product__quantity-control_inc');
	const addButton = product.querySelector('.product__add');
	// 2. Логика изменения количества (Конспект: работа с textContent/innerText, стр. 2)
	// Уменьшение количества
	decButton.addEventListener('click', () => {
		let value = Number(valueElement.innerText); // Получаем текущее число
		if(value > 1) { // Минимальное значение — 1
			value--;
			valueElement.innerText = value; // Обновляем текст
		}
	});
	// Увеличение количества
	incButton.addEventListener('click', () => {
		let value = Number(valueElement.innerText);
		value++;
		valueElement.innerText = value;
	});
	// 3. Логика добавления в корзину
	addButton.addEventListener('click', () => {
		// Получаем данные товара
		const id = product.dataset.id; // Артикул из data-id
		const countToAdd = Number(valueElement.innerText); // Сколько добавить
		const imageSrc = product.querySelector('.product__image').getAttribute('src'); // Ссылка на картинку
		// Проверяем, есть ли уже такой товар в корзине
		// Ищем внутри корзины элемент с таким же data-id
		const productInCart = cartProductsList.querySelector(`.cart__product[data-id="${id}"]`);
		if(productInCart) {
			// --- СЦЕНАРИЙ А: Товар уже есть в корзине ---
			// Находим счетчик внутри товара в корзине
			const currentCountElement = productInCart.querySelector('.cart__product-count');
			const currentCount = Number(currentCountElement.innerText);
			// Складываем текущее количество и добавляемое (стр. 2: изменение содержимого)
			currentCountElement.innerText = currentCount + countToAdd;
		} else {
			// --- СЦЕНАРИЙ Б: Товара нет в корзине (создаем новый) ---
			// Создаем обертку (Конспект: стр. 7, createElement)
			const cartProduct = document.createElement('div');
			cartProduct.classList.add('cart__product');
			cartProduct.dataset.id = id; // Устанавливаем data-id
			// Формируем HTML-структуру товара (Конспект: стр. 4, innerHTML)
			// Используем шаблонную строку для подстановки картинки и количества
			cartProduct.innerHTML = `
                <img class="cart__product-image" src="${imageSrc}">
                <div class="cart__product-count">${countToAdd}</div>
            `;
			// Добавляем созданный товар в корзину (Конспект: стр. 7, appendChild)
			cartProductsList.appendChild(cartProduct);
		}
	});
});
const cookie = document.getElementById('cookie');
const counterEl = document.getElementById('clicker__counter');
const statusEl = document.querySelector('.clicker__status');

// создаём элемент для скорости и вставляем после "Всего кликов"
const speedEl = document.createElement('div');
speedEl.textContent = 'Скорость клика: —';
statusEl.after(speedEl);

let clickCount = 0;
let lastClickTime = null;
let isBig = true;

cookie.onclick = function () {
    // 1. увеличиваем счётчик
    clickCount++;
    counterEl.textContent = clickCount;

    // 2. чередуем размер печенья
    if (isBig) {
        cookie.width = 170;
        cookie.height = 170;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
    isBig = !isBig;

    // 3. скорость клика (повышенный уровень)
    const now = new Date();
    if (lastClickTime !== null) {
        const deltaSeconds = (now - lastClickTime) / 1000;
        const speed = (1 / deltaSeconds).toFixed(1);
        speedEl.textContent = 'Скорость клика: ' + speed + ' кл/сек';
    }
    lastClickTime = now;
};

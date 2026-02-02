const timerElement = document.getElementById('timer');
let totalSeconds = Number(timerElement.textContent);
const formatTime = (time) => String(time).padStart(2, '0');
const downloadFile = () => {
	const link = document.createElement('a');
	link.href = 'https://netology.ru/backend/uploads/lms/attachments/files/data/001/015/786/original/f1040ed50d99042296e622b724597092.png';
	link.download = 'contest_result.png';
	link.click();
};
const updateTimer = () => {
	if(totalSeconds <= 0) {
		clearInterval(timerInterval);
		timerElement.textContent = '00:00:00';
		alert('Вы победили в конкурсе!');
		downloadFile();
		return;
	}
	totalSeconds--;
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
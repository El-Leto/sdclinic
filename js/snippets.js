const firstTime = document.querySelectorAll('.first-time');
firstTime.forEach(item => item.textContent = 'Пн-Пт: 10:00-20:00')

const secondTime = document.querySelectorAll('.second-time');
secondTime.forEach(item => item.textContent = 'Сб: 10:00-18:00 Вс: выходной')

const weekendTime = document.querySelectorAll('.weekend-time');
weekendTime.forEach(item => item.textContent = '')
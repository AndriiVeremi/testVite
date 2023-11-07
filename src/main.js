const arrDays = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];
const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const refs = {
  day: document.querySelector('.date-day'),
  date: document.querySelector('.date'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  clock: document.querySelector('.digital-clock'),
};

setInterval(() => {
    const currentDate = new Date()
    refs.day.textContent = arrDays[currentDate.getDay()];
    refs.date.textContent = currentDate.getDate();
    refs.month.textContent = namesOfMonth[currentDate.getMonth()];
    refs.year.textContent = currentDate.getFullYear();
    refs.clock.textContent = currentDate.toLocaleTimeString('uk');
}, 1000)

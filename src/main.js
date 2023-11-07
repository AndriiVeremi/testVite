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

  seconds: document.querySelector('.clock-seconds__arrow'),
  minutes: document.querySelector('.clock-minutes__arrow'),
  hours: document.querySelector('.clock-hours__arrow'),
  clock2: document.querySelector('.clock-center'),
};

setInterval(() => {
    const currentDate = new Date()
    refs.day.textContent = arrDays[currentDate.getDay()];
    refs.date.textContent = currentDate.getDate();
    refs.month.textContent = namesOfMonth[currentDate.getMonth()];
    refs.year.textContent = currentDate.getFullYear();
    refs.clock.textContent = currentDate.toLocaleTimeString('uk');

    // refs.seconds.style.transform = rotate('30 deg')`;
}, 1000)




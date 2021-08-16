let sklyarov = document.querySelector('#vrach-stazh-sklyarov');
const sklyarovAll = document.querySelectorAll('#vrach-stazh-sklyarov');
const firstWorkTimeSklyarov = sklyarov.dataset.work;

let pleshivciva = document.querySelector('#vrach-stazh-pleshivciva');
const pleshivcivaAll = document.querySelectorAll('#vrach-stazh-pleshivciva');
const firstWorkTimePleshivciva = pleshivciva.dataset.work;

let daladanova = document.querySelector('#vrach-stazh-daladanova');
const daladanovaAll = document.querySelectorAll('#vrach-stazh-daladanova');
const firstWorkTimeDaladanova = daladanova.dataset.work;

let mishkina = document.querySelector('#vrach-stazh-mishkina');
const mishkinaAll = document.querySelectorAll('#vrach-stazh-mishkina');
const firstWorkTimeMishkina = mishkina.dataset.work;

let kruteleva = document.querySelector('#vrach-stazh-kruteleva');
const krutelevaAll = document.querySelectorAll('#vrach-stazh-kruteleva');
const firstWorkTimeKruteleva = kruteleva.dataset.work;

const startWorkDateSklyarov = new Date(firstWorkTimeSklyarov);
const startWorkDatePleshivciva = new Date(firstWorkTimePleshivciva);
const startWorkDateDaladanova = new Date(firstWorkTimeDaladanova);
const startWorkDateMishkina = new Date(firstWorkTimeMishkina);
const startWorkDateKruteleva = new Date(firstWorkTimeKruteleva);

const dateNow = new Date();

function diffDates(now, start) {
  return (now - start);
};

function timeSklyarov(dateNow, startWorkDateSklyarov) {

  let diffTiemSklyarov = diffDates(dateNow, startWorkDateSklyarov);

    let seconds = Math.floor(diffTiemSklyarov / 1000),
      minutes = Math.floor(seconds / 60),
      hours   = Math.floor(minutes / 60),
      days    = Math.floor(hours / 24),
      months  = Math.floor(days / 30),
      years   = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  sklyarovAll.forEach(item => item.textContent = `Стаж работы ${years} лет ${months} мес.`);
};

timeSklyarov(dateNow, startWorkDateSklyarov);

function timePleshivciva(dateNow, startWorkDatePleshivciva) {

  let diffTiemPleshivciva = diffDates(dateNow, startWorkDatePleshivciva);
  
    let seconds = Math.floor(diffTiemPleshivciva / 1000),
      minutes = Math.floor(seconds / 60),
      hours   = Math.floor(minutes / 60),
      days    = Math.floor(hours / 24),
      months  = Math.floor(days / 30),
      years   = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  pleshivcivaAll.forEach(item => item.textContent = `Стаж работы ${years} г. ${months} мес.`);
};

timePleshivciva(dateNow, startWorkDatePleshivciva);

function timeDaladanova(dateNow, startWorkDateDaladanova) {

  let diffTiemDaladanova = diffDates(dateNow, startWorkDateDaladanova);

    let seconds = Math.floor(diffTiemDaladanova / 1000),
      minutes = Math.floor(seconds / 60),
      hours   = Math.floor(minutes / 60),
      days    = Math.floor(hours / 24),
      months  = Math.floor(days / 30),
      years   = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  daladanovaAll.forEach(item => item.textContent = `Стаж работы ${years} лет ${months} мес.`);
};

timeDaladanova(dateNow, startWorkDateDaladanova);

function timeMishkina(dateNow, startWorkDateMishkina) {

  let diffTiemMishkina = diffDates(dateNow, startWorkDateMishkina);

    let seconds = Math.floor(diffTiemMishkina / 1000),
      minutes = Math.floor(seconds / 60),
      hours   = Math.floor(minutes / 60),
      days    = Math.floor(hours / 24),
      months  = Math.floor(days / 30),
      years   = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  mishkinaAll.forEach(item => item.textContent = `Стаж работы ${years} лет ${months} мес.`);
};

timeMishkina(dateNow, startWorkDateMishkina);

function timeKruteleva(dateNow, startWorkDateKruteleva) {

  let diffTiemKruteleva = diffDates(dateNow, startWorkDateKruteleva);

    let seconds = Math.floor(diffTiemKruteleva / 1000),
      minutes = Math.floor(seconds / 60),
      hours   = Math.floor(minutes / 60),
      days    = Math.floor(hours / 24),
      months  = Math.floor(days / 30),
      years   = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  krutelevaAll.forEach(item => item.textContent = `Стаж работы ${years} лет ${months} мес.`);
};

timeKruteleva(dateNow, startWorkDateKruteleva);
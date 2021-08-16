let sklyarov = document.querySelector('#vrach-stazh-sklyarov');
const firstWorkTimeSklyarov = sklyarov.dataset.work;

let pleshivciva = document.querySelector('#vrach-stazh-pleshivciva');
const firstWorkTimePleshivciva = pleshivciva.dataset.work;

let daladanova = document.querySelector('#vrach-stazh-daladanova');
const firstWorkTimeDaladanova = daladanova.dataset.work;

let mishkina = document.querySelector('#vrach-stazh-mishkina');
const firstWorkTimeMishkina = mishkina.dataset.work;

const startWorkDateSklyarov = new Date(firstWorkTimeSklyarov);
const startWorkDatePleshivciva = new Date(firstWorkTimePleshivciva);
const startWorkDateDaladanova = new Date(firstWorkTimeDaladanova);
const startWorkDateMishkina = new Date(firstWorkTimeMishkina);

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

  sklyarov.textContent = `Стаж работы ${years} л. ${months} мес.`;
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

  pleshivciva.textContent = `Стаж работы ${years} г. ${months} мес.`;
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

  daladanova.textContent = `Стаж работы ${years} л. ${months} мес.`;
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

  mishkina.textContent = `Стаж работы ${years} л. ${months} мес.`;
};

timeMishkina(dateNow, startWorkDateMishkina);

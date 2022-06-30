const weekDays = document.querySelectorAll('.work-mode__item');
const date = new Date(); 
const getDayToday = date.getDay();

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 200) {
      $('#back2Top').fadeIn();
      $('.whatsapp-btn').fadeIn();
  } else {
      $('#back2Top').fadeOut();
      $('.whatsapp-btn').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});

function getActiveDay() {
  weekDays.forEach(function(item) {
    if (+item.dataset.day === getDayToday) {
      item.classList.add('work-mode__item--active');
    }
  });
}

getActiveDay();
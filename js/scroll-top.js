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

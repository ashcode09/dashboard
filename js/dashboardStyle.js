$(document).on('click', '#my-dashboard', function() {
  $('li').removeClass("active-nav")
  $("#my-dashboard").addClass("active-nav")
});

$(document).on('click', '#my-account', function() {
  $('li').removeClass("active-nav")
  $("#my-account").addClass("active-nav")
});

$(document).on('click', '#my-payments', function() {
  $('li').removeClass("active-nav")
  $("#my-payments").addClass("active-nav")
});
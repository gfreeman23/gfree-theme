// Modal
$(".modal-close").on("click", function() {
  $("#modal, #overlay").hide();
});

$(document).click(function(event) {
  if (!$(event.target).closest("#modal").length) {
    $("body").find("#modal, #overlay").hide();
  }
});

/**
$("body").on("click", function(e) {
  e.preventDefault();
  $("#modal, #overlay").hide();
  $.cookie("modal", "displayed", {
      expires: 1
  });
});
**/

$(window).scroll(function() {
  var hasSeenSignUpDialogie = $.cookie('modal');
  if (!hasSeenSignUpDialogie) {
    if ($(window).scrollTop() > $('body').height() / 5) {
      $("<div>", {
        id: "overlay"
      }).insertBefore("#modal");
      $("#overlay, #modal").fadeIn(1000).show();
      $(window).unbind('scroll');
    };
  }
  $("#behindbar").on("click", function() {
    $.removeCookie('modal');
  });
});
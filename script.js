$(".hide-button").click(function() {
  $(".ghost-image").hide();
});


$(".show-button").click(function() {
  $(".ghost-image").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").attr("src","https://www.snapchat.com/static/assets/ghost-step1.png");
});

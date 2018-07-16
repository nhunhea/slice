var prev2 = $('.prev2');
var next2 = $('.next2');
var num = 0;
var slides2 = $('.myslide2');

$('.text-content').hide();
$('.text-content').eq(0).show('speed');


next2.on('click', function() {
  $('.text-content').hide();
  num++;
  if (num > slides2.length - 1) {
    num = 0;
  }
  $('.text-content').eq(num).show('slow');
  $('#comp').animate({"margin-left": "-=390px"}, "slow");
});

prev2.on('click', function() {
  $('.text-content').hide();
  num--;
  if (num < 0) {
    num = slides2.length -1;
  }
  $('.text-content').eq(num).show('slow');
  $('#comp').animate({"margin-left": "+=390px"}, "slow");
});

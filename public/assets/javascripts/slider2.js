var prev2 = $('.prev2');
var next2 = $('.next2');
var num = 0;
var help = 0;
var slides2 = $('.myslide2');
var slide_length = slides2.length;

$('.text-content').hide();
$('.text-content').eq(0).show('speed');


next2.on('click', function() {
  $('.text-content').hide();
  num++;
  if (num > slide_length - 1) {
    num = 0;
  }
  $('.text-content').eq(num).show('slow');
  help++;
  if (help >= slide_length){
    $('#comp').animate({"margin-left": "+=1560px"}, "slow");
    help = 0;
  }
  $('#comp').animate({"margin-left": "-=390px"}, "slow");
});

prev2.on('click', function() {
  $('.text-content').hide();
  num--;
  if (num < 0) {
    num = slide_length - 1;
  }
  $('.text-content').eq(num).show('slow');
  help--;
  if (help <= 0){
    $('#comp').animate({"margin-left": "-=1560px"}, "slow");
    help = slide_length;
  }
  $('#comp').animate({"margin-left": "+=390px"}, "slow");
});

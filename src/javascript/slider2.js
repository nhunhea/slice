var prev2 = $('.prev2');
var next2 = $('.next2');
var num = 0;

$('.text-content').hide();
$('.text-content').eq(0).show('speed');

next2.on('click', function() {
  $('.text-content').hide();
  num++;
  if (num > 3) {
    num = 0;
  }
  $('.text-content').eq(num).show('fadeIn');
});

prev2.on('click', function() {
  $('.text-content').hide();
  num--;
  if (num < 0) {
    num = 3;
  }
  $('.text-content').eq(num).show('fadeIn');
});

( "#right" ).click(function() {
  $( ".foto" ).animate({ "left": "+=100px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".foto" ).animate({ "left": "-=100px" }, "slow" );
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides.length);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

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

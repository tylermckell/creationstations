// JavaScript Document
$(function() {
	
   $(window).scroll(function () {
	  if ($(this).scrollTop() > 50) {
         $('#page-tutorial-wrapper').addClass('changeColor')
      }
      if ($(this).scrollTop() < 50) {
         $('#page-tutorial-wrapper').removeClass('changeColor')
      }
   });
});
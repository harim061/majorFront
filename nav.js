$(function() {
  $('.hamburger-btn').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('.overlay').toggleClass('visible');
    
  });
});
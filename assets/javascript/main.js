$(function () {
  $('.toggler').click(function () {
    $('.header').toggleClass('opened');
  });

  $('.dropdown').click(function () {
    $(this).toggleClass('active');
  });

});
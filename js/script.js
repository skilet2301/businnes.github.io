$('.menu-header__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.menu-header__menu').toggleClass('active');
   $('body').toggleClass('lock');

})




$(function () {
   var tab = $('#tabs .tabs-items > div');
   tab.hide().filter(':first').show();

   // Клики по вкладкам.
   $('#tabs .tabs-nav a').click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
   }).filter(':first').click();
});



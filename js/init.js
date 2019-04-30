(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.fixed-action-btn').floatingActionButton();

    new WOW().init();

  }); // end of document ready
})(jQuery); // end of jQuery name space

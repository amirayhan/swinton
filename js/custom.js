$(function(){
    "use strict";
    
    
    //variable
    var html_body = $('html,body');
    var backtotop = $('.back2top');
    
    
    // preloader js
    $('body').addClass('active_preloader');
    $(window).on('load', function() { 
      $('.preloader').fadeOut();
      $('.preloader-ripple').delay(350).fadeOut('slow');
      $('body').removeClass('active_preloader');
    });
    
    
    //back to top js
    backtotop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });
    
    $(window).on('scroll', function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });
})
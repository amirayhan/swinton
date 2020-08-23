$(function () {
    "use strict";
    
    
    //variable
    var html_body = $('html,body');
    var backtotop = $('.back2top');
    var header_fix = $('.position-fixed');  
    
    // preloader js
    $('body').addClass('active_preloader');
    $(window).on('load', function() { 
      $('.preloader').fadeOut();
      $('.preloader-ripple').delay(350).fadeOut('slow');
      $('body').removeClass('active_preloader');
    });
    

    //navbar active js
    $(document).on('click', '.navbar .navbar-nav .nav-item', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    
    //backtotop js
    backtotop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });
    
    
    //header fixed
    $(window).on('scroll', function () {
       
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            header_fix.addClass("bg");
        } else {
            header_fix.removeClass('bg');
        }

        if (scrolling > 300) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });
    
    
    //banner slick slider js
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        lazyLoad: 'progressive',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    
                }
    },
            {
                breakpoint: 600,
                settings: {
                    
                    dots: false,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                }
    }
        ]
    });


    //about skill barfiller js
    $("#banner .social_icon ul li a span").waypoint(function (direction) {
        if (direction == "down") {
            $('#bar1').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
            $('#bar2').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 1500,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
            $('#bar3').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 2000,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
            $('#bar4').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 2500,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
        }
    });
    
    
    //counter js
    $('.counter').counterUp({
        delay: 10,
        time: 2500,
    });


    //portfolio mixitup js
    var mixer = mixitup('.portfolio_img');


    //portfolio venobox js
    $('.venobox').venobox();
    

    //portfolio header active js
    $(document).on('click', '#portfolio .portfolio_catagury ul li', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
    
    
    //testimonial slick slider js
    $('.testimonial_content').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        prevArrow: '<span><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span><i class="fas fa-angle-right"></i></span>',
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 30000,
    });
    

    //partner slick slider js
    $('.partner_content').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    centerMode: true,
                    arrows: false,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    arrows: false,
                }
    }
        ]
    });
    
    
    //featured venobox js
    $('.fea_img').venobox();
    
    
    //animation scroll js
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
    
    //color picker js;
    $('.colors_icon').click(function(){
        $('.colorpicker').toggleClass('colors_open');
    });
    
    
    $('.colorpicker .color1').click(function(){
        $('body').addClass('color1_content').removeClass('color2_content , color3_content , color4_content');
    });
    
    $('.colorpicker .color2').click(function(){
        $('body').addClass('color2_content').removeClass('color1_content , color3_content , color4_content');
    });
    
    $('.colorpicker .color3').click(function(){
    $('body').addClass('color3_content').removeClass('color1_content, color2_content , color4_content');
    });
    
    $('.colorpicker .color4').click(function(){
    $('body').addClass('color4_content').removeClass('color1_content, color2_content , color3_content' );
    });
    
    $('.colorpicker .default').click(function(){
        $('body').removeClass('color1_content , color2_content , color3_content , color4_content');
    });
});
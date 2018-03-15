// Main JS should go here!
// // Include scripts using Browserify by doing:
var $ = require("jquery");

// //Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.page-header').addClass('sticky');
    } else {
        $('.page-header').removeClass('sticky');
    }
});

// Mobile Navigation
// $('.mobile-toggle').click(function() {
//     if ($('.page-header').hasClass('open-nav')) {
//         $('.page-header').removeClass('open-nav');
//     } else {
//         $('.page-header').addClass('open-nav');
//     }
// });

// $('.main_h li a').click(function() {
//     if ($('.page-header').hasClass('open-nav')) {
//         $('.primary-nav').removeClass('open-nav');
//         $('.page-header').removeClass('open-nav');
//     }
// });

//  $('.fa-bars').click(function() {
//         $('.text-menu').toggleClass('menu-appear');
//     });

//     $('nav .text-menu a').click(function() {
//         $('.text-menu').toggleClass('menu-appear');
// });

// // navigation scroll
$('primary-nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// //expand accordion
$('.coaches__coach').on('click', function () {
  $(this).siblings().removeClass('active');
  $(this).toggleClass('active');
});
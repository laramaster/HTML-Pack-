(function ($) {
"use strict";



    // owlCarousel
    $('.gallary-img').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:5
            }
        }
    })


})(jQuery);
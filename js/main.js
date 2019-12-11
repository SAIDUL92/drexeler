$(document).ready(function () {

    /*meanmenu*/

    $('#mobile-menu-active').meanmenu({

        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"


    });
    /*counterUp*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })
    /*slider-active*/

    $('.slider-active').owlCarousel({
        loop: true,
        navText: ['back', 'next'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    })

    //###########################################################

    //product-active

    $('.product-active').owlCarousel({
        loop: true,
        navText: ['back', 'next'],
        nav: true,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            450: {
                items: 2,
                nav: false
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }

    })

    //############################################

    //product-active

    $('.brand-active').owlCarousel({
        autoplay: false,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }

    })






});

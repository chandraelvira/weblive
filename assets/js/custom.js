  
   $('.navbar-toggler').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });


$('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });


$('.home-search').click(function(){
    $('.search-box').fadeIn(1000);
  });

$('.close').click(function(){
    $('.search-box').fadeOut(1000);
  });



$(document).ready(function() {  

$('.main-slider').slick({
    dots: false,
    infinite: true,
    touchThreshold : 100,
    speed: 300,
    autoplay:true,
    draggable:true,
    centerPadding: '50px',
    autoplaySpeed:3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    prevArrow: '<button class="slick-prev"><img src ="assets/images/less-than-arrow.svg"></button>',
    nextArrow: '<button class="slick-next"><img src ="assets/images/less-than-arrow.svg"></button>',
    responsive: [{
        
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
        
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
});



$(document).ready(function() {  
$('#slick-slider1').slick({
    dots: false,
    infinite: true,
    touchThreshold : 100,
    speed: 300,
    centerPadding: '0px',
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px'
            }
        }
    ]
});
});



 $(document).ready(function() {  

    $('.client-review').slick({
        dots: false,
        infinite: true,
        touchThreshold : 100,
        speed: 300,
        autoplay:false,
        draggable:true,
        centerPadding: '0px',
        autoplaySpeed:3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<button class="slick-prev"><img src ="assets/images/less-than-arrow.svg"></button></button>',
        nextArrow: '<button class="slick-next"><img src ="assets/images/less-than-arrow.svg"></button></button>',
        responsive: [{
            
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
            
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    });





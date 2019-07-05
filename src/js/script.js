//scroll start
$("body").on('click','.header__link',function () {
    var elem = $(this).attr('href');
    var dist = $(elem).offset().top;
    $("html,body").animate({'scrollTop':dist},1200);
});

//scroll end

//menu start

const button = document.getElementById('menu-button');
const menuMobile = document.getElementById('mobile');

button.addEventListener('click', e => {
    e.preventDefault();
    button.classList.toggle('menu-button--active');
    document.body.classList.toggle('menu-open');
    menuMobile.classList.toggle('active');
});

//menu end


//gallery isotop start

var gallery = $('.portfolio__gallery');
var filterGal = $('.portfolio__filter');

gallery.isotope({
    itemSelector: '.gallery__item',
    masonry: {
        isFitWidth: true,
    }
});

filterGal.on( 'click', '.filter__item', function() {
    const filterValue = '.' + $(this).data('filter');
    gallery.isotope({ filter: filterValue });
});

gallery.imagesLoaded().progress( function() {
    gallery.isotope('layout');
});

//gallery isotop end

//slider start

$(function(){
    $(".team__slider").slick({
        pauseOnFocus: true,
        arrows:false,
        autoplay: true,
        speed: 1000,
        // fade: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        dots: true,
        dotsClass: 'slider__nav'
    });
});

$(function(){
    $(".testimonials__slider").slick({
        pauseOnFocus: true,
        arrows:false,
        autoplay: true,
        speed: 1000,
        fade: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        dots: true,
        dotsClass: 'slider__nav'
    });
});

//slider end




function initMobile() {
    console.log("is-mobile");
}


function initDesktop() {
    console.log("is-desktop");
}


ssm.addState({
    id: 'tablet',
    query: '(max-width: 900px)',
    onEnter: function(){
        initMobile();
    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 900px)',
    onEnter: function(){
        initDesktop();
    }
});

/*! simplestatemanager | license: MIT | version: 3.3.0 | build date: 2016-09-20 */
!function(a,b,c,d){"function"==typeof define&&define.amd?define(function(){return d(a,b,c)}):"object"==typeof exports?module.exports=d:a.ssm=d(a,b,c)}(window,document,void 0,function(a,b,c){"use strict";function d(a){this.message=a,this.name="Error"}function e(a){this.id=a.id||i(),this.query=a.query||"all",delete a.id,delete a.query;var b={onEnter:[],onLeave:[],onResize:[],onFirstRun:[]};return this.options=h(b,a),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),this.testConfigOptions("once")===!1?(this.valid=!1,!1):(this.valid=!0,this.active=!1,void this.init())}function f(b){this.states=[],this.resizeTimer=null,this.configOptions=[],a.addEventListener("resize",k(this.resizeBrowser.bind(this),l),!0)}function g(a,b,c){for(var d=a.length,e=[],f=0;f<d;f++){var g=a[f];g[b]&&g[b]===c&&e.push(g)}return e}function h(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}function i(){for(var a="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<10;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a}function j(a){for(var b=a.length,c=0;c<b;c++)a[c]()}function k(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}}var l=25,m=function(){};return e.prototype={init:function(){this.test=a.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(a){var b=!1;a.matches?this.testConfigOptions("match")&&(this.enterState(),b=!0):(this.leaveState(),b=!0),b&&m()}.bind(this),this.test.addListener(this.listener)},enterState:function(){j(this.options.onFirstRun),j(this.options.onEnter),this.options.onFirstRun=[],this.active=!0},leaveState:function(){j(this.options.onLeave),this.active=!1},resizeState:function(){this.testConfigOptions("resize")&&j(this.options.onResize)},destroy:function(){this.test.removeListener(this.listener)},attachCallback:function(a,b,c){switch(a){case"enter":this.options.onEnter.push(b);break;case"leave":this.options.onLeave.push(b);break;case"resize":this.options.onResize.push(b)}"enter"===a&&c&&this.active&&b()},testConfigOptions:function(a){for(var b=this.configOptions.length,c=0;c<b;c++){var d=this.configOptions[c];if("undefined"!=typeof this.options[d.name]&&d.when===a&&d.test.bind(this)()===!1)return!1}return!0},configOptions:[]},f.prototype={addState:function(a){var b=new e(a);return b.valid&&this.states.push(b),b},addStates:function(a){for(var b=a.length-1;b>=0;b--)this.addState(a[b]);return this},getState:function(a){for(var b=this.states.length-1;b>=0;b--){var c=this.states[b];if(c.id===a)return c}},isActive:function(a){var b=this.getState(a)||{};return b.active||!1},getStates:function(a){var b=null,c=[];if("undefined"==typeof a)return this.states;b=a.length;for(var d=0;d<b;d++)c.push(this.getState(a[d]));return c},removeState:function(a){for(var b=this.states.length-1;b>=0;b--){var c=this.states[b];c.id===a&&(c.destroy(),this.states.splice(b,1))}return this},removeStates:function(a){for(var b=a.length-1;b>=0;b--)this.removeState(a[b]);return this},removeAllStates:function(){for(var a=this.states.length-1;a>=0;a--){var b=this.states[a];b.destroy()}this.states=[]},addConfigOption:function(a){var b={name:"",test:null,when:"resize"};a=h(b,a),""!==a.name&&null!==a.test&&e.prototype.configOptions.push(a)},removeConfigOption:function(a){for(var b=e.prototype.configOptions,c=b.length-1;c>=0;c--)b[c].name===a&&b.splice(c,1);e.prototype.configOptions=b},getConfigOption:function(a){var b=e.prototype.configOptions;if("string"!=typeof a)return b;for(var c=b.length-1;c>=0;c--)if(b[c].name===a)return b[c]},getConfigOptions:function(){return e.prototype.configOptions},resizeBrowser:function(){for(var a=g(this.states,"active",!0),b=a.length,c=0;c<b;c++)a[c].resizeState()},stateChange:function(a){if("function"!=typeof a)throw new d("Not a function");m=a}},new f});
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

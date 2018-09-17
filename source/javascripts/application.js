//= require jquery
//= require bootstrap
//= require_tree .

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  imagesLoaded: true,
  cellAlign: 'center',
  contain: true
});

var imgs = document.querySelectorAll(".card__image img");
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
var info = document.querySelector(".info");

flkty.on( 'scroll', function () {
  flkty.slides.forEach( function (slide, i) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/18;

    img.style[transformProp] = 'translateX(' + x + 'px) scale(1.1)';
  } );
} );

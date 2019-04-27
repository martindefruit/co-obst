//= require jquery
//= require bootstrap
//= require_tree
//= menu .



'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

// function textScramble() {
//   var TextScramble = function () {
//     function TextScramble(el) {
//       _classCallCheck(this, TextScramble);

//       this.el = el;
//       this.chars = 'lkjsbdkjbdslkdjsblkbsdl';
//       this.update = this.update.bind(this);
//     }

//     TextScramble.prototype.setText = function setText(newText) {
//       var _this = this;

//       var oldText = this.el.innerText;
//       var length = Math.max(oldText.length, newText.length);
//       var promise = new Promise(function (resolve) {
//         return _this.resolve = resolve;
//       });
//       this.queue = [];
//       for (var i = 0; i < length; i++) {
//         var from = oldText[i] || '';
//         var to = newText[i] || '';
//         var start = Math.floor(Math.random() * 40);
//         var end = start + Math.floor(Math.random() * 80);
//         this.queue.push({ from: from, to: to, start: start, end: end });
//       }
//       cancelAnimationFrame(this.frameRequest);
//       this.frame = 0;
//       this.update();
//       return promise;
//     };

//     TextScramble.prototype.update = function update() {
//       var output = '';
//       var complete = 0;
//       for (var i = 0, n = this.queue.length; i < n; i++) {
//         var _queue$i = this.queue[i];
//         var from = _queue$i.from;
//         var to = _queue$i.to;
//         var start = _queue$i.start;
//         var end = _queue$i.end;
//         var char = _queue$i.char;

//         if (this.frame >= end) {
//           complete++;
//           output += to;
//         } else if (this.frame >= start) {
//           if (!char || Math.random() < 0.28) {
//             char = this.randomChar();
//             this.queue[i].char = char;
//           }
//           output += '<span class="dud">' + char + '</span>';
//         } else {
//           output += from;
//         }
//       }
//       this.el.innerHTML = output;
//       if (complete === this.queue.length) {
//         this.resolve();
//       } else {
//         this.frameRequest = requestAnimationFrame(this.update);
//         this.frame++;
//       }
//     };

//     TextScramble.prototype.randomChar = function randomChar() {
//       return this.chars[Math.floor(Math.random() * this.chars.length)];
//     };

//     return TextScramble;
//   }(); 



//   // ——————————————————————————————————————————————————
//   // Example
//   // ——————————————————————————————————————————————————

//   var phrases = ['Web Design', 'Graphic Design', 'Digital Art Direction', 'Front-End Web Development'];

//   var el = document.querySelector('.text');
//   var fx = new TextScramble(el);

//   var counter = 0;
//   var next = function next() {
//     fx.setText(phrases[counter]).then(function () {
//       setTimeout(next, 3500);
//     });
//     counter = (counter + 1) % phrases.length;
//   };

//   next();
// }
// setTimeout(textScramble, 0);

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



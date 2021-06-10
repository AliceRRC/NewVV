import Typed from 'typed.js';


function initTitle() {
 const typed = new Typed('#title', {
  strings: ["V V", "VV", "V V" ],
  typeSpeed: 100,
  backSpeed: 100,
  showCursor: false,
  loop: true
});
}

export { initTitle };

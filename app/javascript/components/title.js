import Typed from 'typed.js';


function initTitle() {
 const typed = new Typed('#title', {
  strings: ["V V", "VV", "V V", "VV", "V V", "VV", "V V", "VV", "V V", "VV", "V V"],
  typeSpeed: 300,
  backSpeed: 300,
  showCursor: false,
  startDelay: 50,
  backDelay: 50,
  loop: true
});
}

export { initTitle };

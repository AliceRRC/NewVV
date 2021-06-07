// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import { blablabla } from '../components/globe';

import 'bootstrap';
import { initializeGlobe } from '../components/globe';
import { initTitle } from '../components/title';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener('turbolinks:load', () => {
initializeGlobe();
initTitle();
})

// blablabla();
// add an if you want it to reload in every page of your site document.addEventListener('turbolinks:load', () => {
//  blablabla();
// })


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)




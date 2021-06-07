import Typed from 'typed.js';


function initTitle() {
 const typed = new Typed('#title', {
  strings: ["Volunteer Vacations", "Mais de 200 projetos em 23 países para você atuar", "Cursos inéditos em ajuda humanitária"],
  typeSpeed: 30,
  loop: true
});
}

export { initTitle };

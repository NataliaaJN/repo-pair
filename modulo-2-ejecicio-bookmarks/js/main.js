"use strict"

/* Dia 1*/
/* 1- Prueba mostrar formulario nuevo bookmark */
/* 2- Prueba mostrar menu */
/* 3- Añadir informacion de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/

const form= document.querySelector('.collapsed');
form.classList.remove('collapsed');

const section= document.querySelector('.data-actions__add');
section.classList.remove('hidden');

let link= document.querySelector('.data__list');
let html = "";

const bk_1_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bk_1_lesson = '';
const bk_1_desc = 'JS en los materiales de Adalab';
const bk_1_tag_1 ='';
const bk_1_tag_2 = '';


const link1 = `
<li class="data__listitem">
              <article class="data__item">
                <p class="item__url">
                  <a class="link1" href="${bk_1_url}" target="_blank" rel="noopener noreferrer">
                  ${bk_1_url}
                </a>-->
                </p>
                <p class="item__seen">
                  <input
                    type="checkbox"
                    checked
                    name="item_imp_2"
                    id="item_imp_2"
                  />
                </p>
                <p class="item__desc">${bk_1_desc}</p>
                <ul class="item__tags">
                  <li class="item__tag">javascript</li>
                  <li class="item__tag">HTML</li>
                </ul>
              </article>
            </li>
`;

html = link1;

const link2 = `
<li class="data__listitem">
              <article class="data__item">
                <p class="item__url">
                  <a class="link2" href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/" target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>
                </p>

                <p class="item__seen">
                  <input
                    type="checkbox"
                    checked
                    name="item_imp_1"
                    id="item_imp_1"
                  />
                </p>
                <p class="item__desc">Ideas de proyectos JS</p>
                <ul class="item__tags">
                  <li class="item__tag">javascript</li>
                  <li class="item__tag">portfolio</li>
                </ul>
              </article>
            </li>
`;

html += link2;

const link3 = `
<li class="data__listitem">
<article class="data__item">
  <p class="item__url js-item__url">
    <!--<a class="link3" href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web" target="_blank" rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>-->
  </p>
  <p class="item__seen">
    <input type="checkbox" name="item_imp_2" id="item_imp_2" />
  </p>
  <p class="item__desc">HTML en los materiales de Adalab</p>
  <ul class="item__tags">
    <li class="item__tag">HTML</li>
    <li class="item__tag">CSS</li>
  </ul>
</article>
</li>
`;

html += link3;


link.innerHTML = html;
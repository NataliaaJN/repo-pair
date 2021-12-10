"use strict";

/*              Sección de elementos que usamos en el HTML             */
/*  -----------------------------------------------------------------  */

const menuDropdown = document.querySelector(".js_menu_dropdown");
const linkDropdown = document.querySelector(".js_link_dropdown");
const sectionAdd = document.querySelector(".js_section_add");
const buttonAdd = document.querySelector(".js_button_add");
const boardData = document.querySelector(".js_boarddata");
const listData = document.querySelector(".js_list_data");
const buttonShowCardview = document.querySelector(".js_cardview_button");
const buttonShowTable = document.querySelector(".js_table_button");

/*    Sección de variables globales (que usamos en todo el fichero)    */
/*  -----------------------------------------------------------------  */

// Variables para el primer bookmark:
const DataBookmarks = {
  bmkData_1: {
    url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
    desc: "JS en los materiales de Adalab",
    seen: "checked title ='Enlace leído'",
    tags_1: "Javascript",
    tags_2: "",
  },
  bmkData_2: {
    url: "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/",
    desc: "Ideas de proyectos JS",
    seen: 'c: hecked title="Enlace leído"',
    tags_1: "",
    tags_2: "",
  },
  bmkData_3: {
    url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web",
    desc: "HTML en los materiales de Adalab",
    seen: 'title="Por leer"',
    tags_1: "html",
    tags_2: "css",
  },

};




 *
 * @param { string } tags_1 Nombre de la primera etiqueta de un bookmark
  * @param { string } tags_2 Nombre de la segunda etiqueta de un bookmark
    * @returns Un String con el HTML de la lista de etiquetas
      * /

function renderTags(tags_1, tags_2) {
  let htmlTags = `
    <ul class="item__tags">`;

  if (tags_1 !== "") {
    htmlTags += `
      <li class="item__tag">${tags_1}</li>`;
  }

  if (tags_2 !== "") {
    htmlTags += `
      <li class="item__tag">${tags_2}</li>`;
  }

  htmlTags += `      
    </ul>
  `;

  return htmlTags;
}

/**
 * Genera el código HTML de un bookmark.
 *
 * @param {String} url Dirección del bookmark
 * @param {String} desc Descripción del bookmark
 * @param {String} seen Atributos para el input-checkbox del HTML
 * @param {String} tags_1 Primera etiqueta
 * @param {String} tags_2 Segunda etiqueta
 * @returns Un String con el código HTML que representa el bookmark.
 */
//Aquí hemos añadido nuestro objeto
function renderBookmark(DataBookmarks) {
  const htmlTags = renderTags(DataBookmarks.bmkData_1.tags_1, DataBookmarks.bmkData_1.tags_2);

  const htmlBookmark = `
    <li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${DataBookmarks.bmkData_1.url}" target="_blank" rel="noopener noreferrer">
            ${DataBookmarks.bmkData_1.url}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${DataBookmarks.bmkData_1.seen} name="item_seen_2" id="item_seen_2">
        </p>
        <p class="item__desc">${DataBookmarks.bmkData_1.desc}</p>
        ${DataBookmarks.bmkData_1.tags_1}
      </article>
    </li>
    `;

  return htmlBookmark;
}

// Invocamos 3 veces a la función para generar el HTML de los bookmakrs
// pero en cada invocación le pasamos como parámetro los datos del
// bookmark correspondiente.
// El HTML que van generando, lo acumulamos en la variable html.

//Aquí hemos añadido TAMBIÉN nuestro objeto

let html = renderBookmark(
  DataBookmarks
);
html += renderBookmark(
  DataBookmarks
);
html += renderBookmark(
  DataBookmarks
);

// Ponemos todo el HTML generado como innerHTML del <ul> de la página.

listData.innerHTML = html;

// Día 4: Funciones para cambiar la visualización de la lista de bookmarks.

/**
 * Cambia el modo de visualización de bookmarks a lista de tarjetas.
 */

function setCardListView() {
  boardData.classList.remove("tableview");
  boardData.classList.add("listview");
}

/**
 * Cambia el modo de visualización de bookmarks tabla.
 */

function setTableView() {
  boardData.classList.remove("listview");
  boardData.classList.add("tableview");
}

// Día 4: Funciones para mostrar y ocultar el menú dropdown

/**
 * Muestra el menú colapsable
 */

function showDropDownMenu() {
  menuDropdown.classList.remove("collapsed");
}

/**
 * Oculta el menú colapsable
 */

function hideDropDownMenu() {
  menuDropdown.classList.add("collapsed");
}

/**
 * Muestra u oculta el menú colapsable dependiendo de su estado actual.
 */

function toggleDropDownMenu() {
  if (menuDropdown.classList.contains("collapsed")) {
    showDropDownMenu();
  } else {
    hideDropDownMenu();
  }

  // Lo anterior es lo mismo que usar:
  //
  // menuDropdown.classList.toggle('collapsed');
}

// Día 4: Función para mostrar el formulario de añadir bookmark

/**
 * Muestra el formulario para añadir un nuevo bookmark
 */

function showAddForm() {
  sectionAdd.classList.remove("hidden");
}

/* Sección de eventos (addEventListener y funciones handler asociadas) */
/*  -----------------------------------------------------------------  */

// Día 5: Se escucha el click en el enlace del botón hamburguesa
// para mostrar u ocultar el menú dropdown.
linkDropdown.addEventListener("click", handleClickLinkDropdown);

function handleClickLinkDropdown(event) {
  event.preventDefault();
  toggleDropDownMenu();
}

// Día 5: Se escucha el click del botón "Vista tarjetas" del menú
// dropdown y se cambia la visualización de los bookmarks a tarjetas,
// además de resaltar ese botón.

function handleClickShowCardview(event) {
  event.preventDefault();

  setCardListView();
  buttonShowTable.classList.remove("selected");
  buttonShowCardview.classList.add("selected");
}

// Día 5: Se escucha el click del botón "Vista tabla" del menú
// dropdown y se cambia la visualización de los bookmarks a tabla,
// además de resaltar ese botón.

function handleClickShowTable(event) {
  event.preventDefault();

  setTableView();
  buttonShowCardview.classList.remove("selected");
  buttonShowTable.classList.add("selected");
}

buttonShowCardview.addEventListener("click", handleClickShowCardview);
buttonShowTable.addEventListener("click", handleClickShowTable);

// Día 5: Se escucha el click en el botón "Nueva" para mostrar
// el formulario de añadir una nueva tarjeta.

buttonAdd.addEventListener("click", showAddForm);

/*
// Otra forma de hacerlo:

function handleClickButtonAdd(event) {
  showAddForm();
}

buttonAdd.addEventListener('click', handleClickButtonAdd);
*/

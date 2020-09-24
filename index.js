import btnScroll from "./btn_scroll.js";
import filtroBusqueda from "./filtro_busquedas.js";

document.addEventListener("DOMContentLoaded",e =>{
    filtroBusqueda(".animal-filtro",".animal");
    btnScroll(".scroll-top-btn");
});
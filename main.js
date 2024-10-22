import { setInLocalStorage } from "./src/persistence/localStorage.js";
import { renderCategories } from "./src/services/categories.js";
import { openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";
//import "./style.css"; no me deja importarlo

// ===== APLICACION =====
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

// ===== Header =====
const buttonAdd = document.getElementById("buttonAddElement"); 
buttonAdd.addEventListener("click", () =>{
    openModal();
});

// button search

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () =>{
    openModal();
});




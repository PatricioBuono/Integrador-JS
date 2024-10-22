/*===== Products =====*/

import {productoActivo } from "../../main.js";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage.js";
import { closeModal, openModal } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store.js";



const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener(("click"), () =>{
    // funcion para guardar elementos 
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {

    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categorias").value;
    let object = null;
    if (productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }
    
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

// eliminar un elemento
export const handleDeleteProduct = () =>{
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo elimina sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            console.log(products);
            const result = products.filter((el) => el.id !== productoActivo.id);
            // setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else{
            closeModal();
        }
      });
    
};







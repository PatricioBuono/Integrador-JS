import { handleGetProductLocalStorage } from "../persistence/localStorage.js";
import { handleRenderList } from "../views/store.js";

export const handleSearchProductsByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el) => 
        el.nombre.toLowerCase().includes(inputHeader.value)
    );

    handleRenderList(result);
};
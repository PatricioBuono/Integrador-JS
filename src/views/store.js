// ===== STORE =====

import { setProductoActivo } from "../../main.js";
import { handleGetProductLocalStorage } from "../persistence/localStorage.js";
import { openModal } from "./modal.js";

export const handleGetProductsToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);

};

export const handleRenderList = (productosIn) => {

    const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (productos, title) =>{
        if(productos.length > 0){

            const productosHTML = productos.map((producto, index) =>{
                return `<div class="containerTargetItem" id='product-${producto.categoria}-${index}'>
                    <div>
                        <img src='${producto.imagen}'/>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class = "targetProps">
                            <p><b>Precio:</b> ${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            });

            return `
            <section class = "sectionStore">
                <div class = "containerTitleSection">
                    <h3>${title}</h3>
                </div>
                <div class = "containerProductStore">
                ${productosHTML.join("")}
                </div>
            </section>
            `;
        } else {
            return "";
        }
    };

    // renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productosIn) => {

        productosIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
            productContainer.addEventListener("click", () =>{
                setProductoActivo(element);
                openModal();
            });
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};


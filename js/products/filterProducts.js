import { renderHtml } from "./fetchProducts.js";



export function filteredProducts(result) {

    renderHtml();

    const search = document.querySelector(".form-control");


    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();
        

        const filteredItems = result.filter(function (item) {
            if (item.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        })

        result = filteredItems;
       
        console.log(result)

    }
}
 

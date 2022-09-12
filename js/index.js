import { baseUrl } from "./settings/baseUrl.js";
import { displayMessage } from "./components/displayMessage.js";
import { savefavs } from "./localStorage/saveToLocalStorage.js";
import { getExistingFavs } from "./localStorage/getFromStorage.js";
import { toggleProducts } from "./products/toggleProducts.js";


const itemsUrl = baseUrl;




(async function () {
    const featuredContainer = document.querySelector(".featured_container");


    try {
        const response = await fetch(itemsUrl);
        let result = await response.json();

        function renderHtml() {

            featuredContainer.innerHTML = "";

            result.forEach(function (item) {

                if (item.featured === true) {
                    featuredContainer.innerHTML += `
                    
                    <div class="products">
                        <div class="image_section">
                            <img src="http://localhost:4000${item.image.url}">

                            <div class="product_icons">
                                <i class="bi bi-cart" data-id=${item.id} data-title=${item.title}></i>
                            </div>
                        </div>
                        <div class="product_info">
                            <p>${item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>`
                }
            });
        }
        renderHtml()
        toggleProducts();

        // // Adding to cart function
        // const favBtns = document.querySelectorAll(".products i")

        // favBtns.forEach((button) => {
        //     button.addEventListener("click", handleClick);
        // })


        // function handleClick() {
        //     this.classList.toggle("bi-cart-fill");
        //     this.classList.toggle("bi-cart");


        //     const id = this.dataset.id;
        //     const title = this.dataset.title;

        //     const currentFavs = getExistingFavs();



        //     const productExist = currentFavs.find(function (fav) {
        //         return fav.id === id;

        //     });

        //     if (productExist === undefined) {

        //         const product = { id: id, title: title };
        //         currentFavs.push(product);
        //         savefavs(currentFavs);

        //     }
        //     else {
        //         const newfavs = currentFavs.filter(fav => fav.id !== id);
        //         savefavs(newfavs);
        //     }


        // }

        
    }
    
    catch (error){
        console.log(error)
        displayMessage();
    }


})();
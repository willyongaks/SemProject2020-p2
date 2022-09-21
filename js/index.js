import { baseUrl } from "./settings/baseUrl.js";
import { createMenu } from "./components/createMenu.js";
import { toggleProducts } from "./products/toggleProducts.js";
import { logOutButton } from "./components/logOutBtn.js";

const itemsUrl = baseUrl;

createMenu();

(async function () {
    const featuredContainer = document.querySelector(".featured_container");
    const heroContainer = document.querySelector(".hero-image");


    try {
        const response = await fetch(itemsUrl);
        let result = await response.json();

        function renderHtml() {

            heroContainer.innerHTML += `<img src="/images/small_revolt_164_6w_VE_Hf_I_unsplash_a283fe5ce0.jpg" alt="Red nike shoes">`

            featuredContainer.innerHTML = "";

            result.forEach(function (item) {
               
                if (item.featured === true) {
                    featuredContainer.innerHTML += `
                    
                    <div class="products">
                     <a href="./productDetails.html?id=${item.id}" class="product_link">
                        <div class="image_section">
                            <img src="http://localhost:4000${item.image.url}">
                        </a>
                            <div class="product_icons">
                                <i class="bi bi-cart" data-id=${item.id} data-title=${item.title} data-image=${item.image.url} data-price=${item.price}></i>
                            </div>
                        </div>

                        <div class="product_info">
                            <p>${item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                    
                    `
                }
            });
        }
        renderHtml()
        toggleProducts();  
    }
    
    catch (error){
        console.log(error)
    }
})();

logOutButton();
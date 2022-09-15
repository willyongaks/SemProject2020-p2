import { baseUrl } from "./settings/baseUrl.js";
// import { displayMessage } from "./components/displayMessage.js";
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
                console.log(item.image.url)
                if (item.featured === true) {
                    featuredContainer.innerHTML += `
                    
                    <div class="products">
                    <a href="./productDetails.html" class="product_link">
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
        // displayMessage();
    }


})();
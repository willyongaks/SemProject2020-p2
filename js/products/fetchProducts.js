import { baseUrl } from "../settings/baseUrl.js";
import { displayMessage } from "../components/displayMessage.js";

const itemsUrl = baseUrl;

(async function() {

    const featuredContainer = document.querySelector(".featured_product_container");
    const search = document.querySelector(".form-control");

    try {
        const response = await fetch(itemsUrl);
        let result = await response.json();

        function renderHtml() {

            featuredContainer.innerHTML = "";

            result.forEach(function (item) {
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
                
            });
        }
        renderHtml()

         // filter Function

        search.onkeyup = function (event) {
            
            const searchValue = event.target.value.trim().toLowerCase();

            const filteredItems = result.filter(function (item) {
                if (item.title.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
            })

            result = filteredItems;
            renderHtml();
        }
    }

    catch (error) {
        console.log(error)
        displayMessage();
    }


   

    
})();
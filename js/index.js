import { baseUrl } from "./settings/baseUrl.js";
import { displayMessage } from "./components/displayMessage.js";


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
    }
    catch (error){
        console.log(error)
        displayMessage();
    }


})();
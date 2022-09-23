import { baseUrl } from "../settings/baseUrl.js";
import { toggleProducts } from "./toggleProducts.js";
import { logOutButton } from "../components/logOutBtn.js";
import { filteredProducts } from "./filterProducts.js";


const itemsUrl = baseUrl;


export async function renderHtml() {

    const featuredContainer = document.querySelector(".featured_product_container");


    try {
        const response = await fetch(itemsUrl);
        let result = await response.json();

        console.log(result)
        featuredContainer.innerHTML = "";

        result.forEach(function (item) {


            const imageUrl = item.image ? `http://localhost:4000${item.image.url}` : item.image_url;


            featuredContainer.innerHTML += `
                    
            <div class="products">
                <a href="./productDetails.html?id=${item.id}" class="product_link">
                <div class="image_section"><img src="${imageUrl}"></a>
                    <div class="product_icons">
                        <i class="bi bi-cart" data-id=${item.id} data-title=${item.title} data-image=${imageUrl} data-price=${item.price}></i>
                    </div>
                </div>
                <div class="product_info">
                    <p>${item.title}</p>
                    <p>${item.price}</p>
                </div>
            </div>`

        });
        filteredProducts(result);
        toggleProducts();
    }
    catch (error) {
        console.log(error)
        // displayMessage();
    }




};
renderHtml();
logOutButton();

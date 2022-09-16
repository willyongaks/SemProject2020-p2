import { url } from "./baseUrl.js";


const link = `${url}/${home}`;


export async function heroImage() {
    const heroContainer = document.querySelector(".hero-image");


    try {
        const response = await fetch(link);
        let result = await response.json();

        function renderHtml() {

            heroContainer.innerHTML += `<a href="./productDetails.html?id=${result.id}" class="product_link">`
        }
    }

    catch(error){

    }
}heroImage()
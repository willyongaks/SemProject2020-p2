export function displayMessage() {
    const element = document.querySelector(".featured_container", ".featured_product_container");

    element.innerHTML += ` <div class="message error">An error occured please try later</div>`
}
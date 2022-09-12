import { getExistingFavs } from "../localStorage/getFromStorage.js";


const favourites = getExistingFavs();
console.log(favourites)




const featuredContainer = document.querySelector(".cart_container");


favourites.forEach(item => {
    featuredContainer.innerHTML += `
    
    <div class="cart_header">
            <h4>Shopping cart</h4>
        </div>
        <div class="cart_products">
            <div class="cart_row">
                <div class="product_image">
                    <img src="http://localhost:4000${item.image}">
                </div>
                <div class="product_description">
                    <p class="title">${item.title}</p>
                </div>
                <div class="product_counter">
                    <input type="number" class="quantity" name="quantity" min="1" max="5" value="3">
                </div>
                <div class="product_price">
                    <div class="product_price">${item.price}</div>
                    <div class="product_remove"><a href="#">Remover</a></div>
                </div>
            </div>
        </div>
    
        <hr>
            <div class="product_checkout">
                <div class="products_total">
                    <div>
                        <div class="total_items_title">Total</div>
                    </div>
                    <div class="total_amount"> 54.98 kr</div>
                </div>
                <button class="checkout_btn">Checkout</button>
            </div>
    `
    
});
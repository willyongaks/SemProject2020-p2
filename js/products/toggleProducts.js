import { savefavs } from "../localStorage/saveToLocalStorage.js";
import { getExistingFavs } from "../localStorage/getFromStorage.js";
export function toggleProducts() {




    // Adding to cart function
    const favBtns = document.querySelectorAll(".products i")

    favBtns.forEach((button) => {
        button.addEventListener("click", handleClick);
    })


    function handleClick() {
        this.classList.toggle("bi-cart-fill");
        this.classList.toggle("bi-cart");


        const id = this.dataset.id;
        const title = this.dataset.title;

        const currentFavs = getExistingFavs();



        const productExist = currentFavs.find(function (fav) {
            return fav.id === id;

        });

        if (productExist === undefined) {

            const product = { id: id, title: title };
            currentFavs.push(product);
            savefavs(currentFavs);

        }
        else {
            const newfavs = currentFavs.filter(fav => fav.id !== id);
            savefavs(newfavs);
        }


    }
}
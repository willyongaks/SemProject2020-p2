export function cartFunction() {

    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", ready)
    } else {
        ready()
    }

    function ready() {

        const removeProductBtn = document.querySelectorAll(".product_remove");

        for (let i = 0; i < removeProductBtn.length; i++) {
            const button = removeProductBtn[i]
            button.addEventListener("click", removeCartProducts)
        }

        // quantity change
        const quantityInput = document.querySelectorAll(".quantity")
        for (let i = 0; i < quantityInput.length; i++) {
            const input = quantityInput[i]
            input.addEventListener("change", quantitychanged)
        }

    }


    // Remove items

    function removeCartProducts(event) {
        const buttonclicked = event.target
        buttonclicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()

    }


    // quantity change function

    function quantitychanged(event) {
        const input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }



    function updateCartTotal() {
        const cartContainer = document.querySelectorAll(".cart_products")[0]
        const cartRows = cartContainer.querySelectorAll(".cart_row")

        let total = 0;

        for (let i = 0; i < cartRows.length; i++) {
            const cartRow = cartRows[i]
            const priceElement = cartRow.querySelectorAll(".product_price")[0]
            const quantityElement = cartRow.querySelectorAll(".quantity")[0]


            const price = parseFloat(priceElement.innerText)
            const quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.querySelectorAll(".total_amount")[0].innerText = total
    }
    updateCartTotal()
}



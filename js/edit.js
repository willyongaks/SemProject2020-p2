import { baseUrl } from "./settings/baseUrl.js";
import { logOutButton } from "./components/logOutBtn.js";
import { displayMessage} from "./components/logErrorMessage.js"
import { createMenu } from "./components/createMenu.js";
import { deleteButton} from "./products/deleteButton.js";
import { getToken } from "./localStorage/loginStorage.js";




const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `${baseUrl}/${id}`;

console.log(id)


// if(!id) {
//     document.location.href = "/"
// }



const form = document.querySelector("form")
const title = document.querySelector(".name")
const price = document.querySelector(".price")
const description = document.querySelector(".description");
const idInput = document.querySelector(".id");
const message = document.querySelector(".message-container");


(async function () {

    try{
        const response = await fetch(url);
        const result = await response.json();

        title.value = result.title;
        price.value = result.price;
        description.value = result.description;
        idInput.value = result.id;

        deleteButton(result.id);



    }
    catch(error){

    }
    finally {
        form.style.display = "block"
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML += "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;
    
    
    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please enter correct values", ".message-container");
    }

    updateProduct(titleValue, priceValue, descriptionValue, idValue);
}

async function updateProduct(title, price, description, id) {

    const url = baseUrl + "/" + id;
    const data = JSON.stringify({title: title, price: price, description: description});

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try{
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    }

    catch(error){
        console.log(error)
    }
};



logOutButton();createMenu();
import { baseUrl } from "../settings/baseUrl.js";
import { getToken } from "../localStorage/loginStorage.js";

export function deleteButton() {

    const container = document.querySelector(".delete_container");

    container.innerHTML += ` <button type="button" class="delete_btn">Delete</button>`
    
    const button = document.querySelector("button.delete");

    button.onclick = async function() {

        const deleteItem = confirm( "Delete this product?");

        if(deleteItem) {
            const url = baseUrl + "/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                Headers: {
                    Authorization: `Baerer ${token}`,
                },
            };

            try{
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "/";

            }
            catch(error){
                console.log(error)
            }
        
        }
    };
}
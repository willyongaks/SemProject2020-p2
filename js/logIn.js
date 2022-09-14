import { url } from "./settings/baseUrl.js";
import { displayMessage } from "./components/logErrorMessage.js";


const form = document.querySelector("form")
const username = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector(".message-container")


form.addEventListener("submit", submitForm);

function submitForm(event) {

    event.preventDefault();

    message.innerHTML = "";

    const emailValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "invalid values", ".message-container")
    }

    doLogin(emailValue, passwordValue);
}

async function doLogin() {
    const link = url + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(link,options);
        const json = await response.json();
        console.log(json);

        // if (json.user) {
        //     displayMessage("success", "Successfully logged in", ".message-container");
        // }

        // if (json.error) {
        //     displayMessage("warning", "Invalid login details", ".message-container");
        // }
        
    } 
    catch (error) {
        console.log(error);
      
    }
}



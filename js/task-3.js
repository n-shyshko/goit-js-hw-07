const userInputText = document.querySelector("input#name-input");
const userOutputText = document.querySelector("span#name-output");
userInputText.addEventListener("input", handleInput);

function handleInput (event){
    if (event.currentTarget.value.trim()) {
        return userOutputText.textContent = event.currentTarget.value.trim();
        } else {
        return userOutputText.textContent = "Anonymus"
    }
}

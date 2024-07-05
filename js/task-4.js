const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit (event){
    event.preventDefault();

    const userInfo = {
        email: event.currentTarget.elements.email.value.trim(),
        password: event.currentTarget.elements.password.value.trim()
    }
    if (userInfo.email&&userInfo.password) {
        console.log(userInfo);
    } else {
        alert("All form fields must be filled in");
    }

    event.currentTarget.reset();
}   
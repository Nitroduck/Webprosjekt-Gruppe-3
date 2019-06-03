let emailInput = document.getElementById("emailInp");
let passwordInput = document.getElementById("passwordInput");
let finalLogin = document.getElementById("finalLogin");
let status = document.getElementById("staus");

function login() {
    if (emailInput === "kari@nordmann.no" && passwordInput === "kari123") {
        finalLogin.createElement("board.html");
    } else {
        status.innerText = "Wrong email or password";
    }
}
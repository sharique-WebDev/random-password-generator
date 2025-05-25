const inputEl = document.getElementById("passwordField");
const copyBtn = document.querySelector(".fa-copy");
const btn = document.querySelector("button");
const copyMsg = document.querySelector(".copyMsg");
const lengthInput = document.getElementById("lengthInput");

// Checkbox references
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

function generatePassword() {
    let charSet = "";
    if (uppercaseEl.checked) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseEl.checked) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (numbersEl.checked)   charSet += "0123456789";
    if (symbolsEl.checked)   charSet += "!@#$%^&*()-_+=";

    let password = "";
    let length = parseInt(lengthInput.value) || 12;

    if (charSet.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    for (let i = 0; i < length; i++) {
        let randIdx = Math.floor(Math.random() * charSet.length);
        password += charSet[randIdx];
    }

    inputEl.value = password;
}

function copyPassword() {
    inputEl.select();
    document.execCommand("copy");

    copyMsg.style.bottom = "40px";
    copyMsg.style.opacity = "1";

    setTimeout(() => {
        copyMsg.style.bottom = "-40px";
        copyMsg.style.opacity = "0";
    }, 2000);
}

// Event listeners
btn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

const inputEl = document.querySelector("input")
        const copyBtn = document.querySelector(".fa-copy")
        const btn = document.querySelector("button")
        const copyMsg = document.querySelector(".copyMsg")

        function generatePassword() {
            let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=";
            let password = ""
            for (let i = 0; i < 12; i++) {
                let randIdx = Math.floor(Math.random() * charSet.length)
                password += charSet[randIdx]
            }
            inputEl.value = password;
        }

        function copyPassword() {
            inputEl.select();
            document.execCommand("copy");

            copyMsg.style.bottom = "20px"
            copyMsg.style.opacity = "1"

            setTimeout(() => {
                copyMsg.style.bottom = "-40px"
                copyMsg.style.opacity = "0"
            }, 2000);
        }

        btn.addEventListener("click", generatePassword)
        copyBtn.addEventListener("click", copyPassword)
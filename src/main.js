let passwordGeneratorBtn = document.getElementById("password-generator-btn")
let passwordEl = document.getElementById("password-el")
const passwordContent = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
let passwordLength = 12


function generatePassword() {
    let password = ""
    for (let i=0; i<passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordContent.length)
        password += passwordContent[randomIndex]
    }

    console.log(password)
    passwordEl.textContent = password

    return 
}
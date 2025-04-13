let passwordGeneratorBtn = document.getElementById("password-generator-btn")
let passwordEl = document.getElementById("password-el")
let passwordEl1 = document.getElementById("password-el1")
const passwordContent = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
let passwordLength = 12
passwordEl.style.display = "none"
passwordEl1.style.display = "none"


/**
 * Función genera una contraseña aleatoria de longitud 12 utilizando el array passwordContent.
 * @returns {string} retorna una contraseña aleatoria.
 */
function generatePassword() {
    let password = ""
    for (let i=0; i<passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordContent.length)
        password += passwordContent[randomIndex]
    }

    console.log(password)

    return password
}

/**
 * Renderiza la contraseña generada en el DOM.
 * Asigna la contraseña generada a los elementos passwordEl y passwordEl1.
 * @returns {void}
 */
function renderPassword() {
    passwordEl.style.display = "block"
    passwordEl1.style.display = "block"
    let password1 = generatePassword()
    let password2 = generatePassword()
    passwordEl.textContent = password1
    passwordEl1.textContent = password2

    return
}
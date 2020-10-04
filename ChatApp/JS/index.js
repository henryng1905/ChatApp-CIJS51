const init = () => {
    console.log('window loaded')
    view.setActiveScreen('registerPage')
    let loginBtn = document.getElementById('redirect-login')
    loginBtn.addEventListener("click", redirectLogin)
}
window.onload = init




const redirectRegister = () => {
    view.setActiveScreen('registerPage')
    let registerBtn = document.getElementById('redirect-login')
    registerBtn.addEventListener("click", redirectLogin)
    console.log("Register")
}



const redirectLogin = () => {
    view.setActiveScreen('loginPage')
    let loginBtn = document.getElementById('redirect-register')
    loginBtn.addEventListener("click", redirectRegister)
    console.log("Login")
}


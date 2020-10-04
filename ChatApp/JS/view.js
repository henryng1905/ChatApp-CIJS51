const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = components.registerPage
            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = components.loginPage
            break;
    }
}
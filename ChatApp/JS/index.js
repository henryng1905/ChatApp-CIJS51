const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyADNXbJk2QsCK3deEa6TO42yxswUYBIeIw",
    authDomain: "chatapp-53232.firebaseapp.com",
    databaseURL: "https://chatapp-53232.firebaseio.com",
    projectId: "chatapp-53232",
    storageBucket: "chatapp-53232.appspot.com",
    messagingSenderId: "789082286839",
    appId: "1:789082286839:web:058f31789fea78be1b01f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  firebase.auth().onAuthStateChanged((res) => {
    console.log(res)
    if (res) {
      if (res.emailVerified) {
        model.currentUser = {
          displayName: res.displayName,
          email: res.email
        }
        console.log(model.currentUser)
        view.setActiveScreen('chatPage')
      }
      else {
        view.setActiveScreen('loginPage')
        alert('Please verify your email.')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })

}
window.onload = init

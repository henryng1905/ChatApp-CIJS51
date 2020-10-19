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
  // firestoreQuerise();
}
window.onload = init

// firestoreQuerise =  async() => {
//     //get one 
//     const respon = await firebase.firestore().collection('users').doc('rdyti7PoXkQk8P0TbZYK').get();
//     const user = getDataFromDoc(respon)
//     console.log(user)
//     //get many
//     const respon = await firebase.firestore().collection('users').where('phone','array-contains', '03245').get()
//     const listUser = getDataFromDocs(respon.docs)
//     console.log(listUser)
//     //add
//     const dataToAdd = {
//         name:"Nguyen van A",
//         age  : 10
//     }
//     firebase.firestore().collection("users").add(dataToAdd);

//     //update
//     const dataToUpdate = {
//         name: 'xyxzzz',
//         address : "hai p",
//         address : firebase.firestore.FieldValue.delete(),
//         phone : firebase.firestore.FieldValue.arrayUnion('1234567')
//     }
//     const docID = "rdyti7PoXkQk8P0TbZYK"
//     firebase.firestore().collection('users').doc(docID).update(dataToUpdate)
//     //delete
//     const docID = "rdyti7PoXkQk8P0TbZYK"
//     firebase.firestore().collection('Users').doc('docId').delete;
// }
getDataFromDoc = (res) => {
    const data = res.data()
    data.id = res.id
    return data
}
getDataFromDocs = (docs) => {
    const arr = []
    for( const oneDoc of docs){
        arr.push(getDataFromDoc(oneDoc))
    }
    return arr
    return docs.map(getDataFromDoc)
}
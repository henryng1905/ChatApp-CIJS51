const model = {}
model.currentUser = {}
model.register = async ({ firstName, lastName, email, password }) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        // update profile
        firebase.auth().currentUser.updateProfile({
            displayName: firstName + ' ' + lastName
        })
        // gui email verify
        firebase.auth().currentUser.sendEmailVerification()

    } catch (err) {
        alert(err.message)
    }
}

//data trang login
model.login = async ({ email, password }) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        // console.log(response)
        // if (response.user.emailVerified) {
        // view.setActiveScreen('welcomePage')
        // alert('Chúc mừng bạn đã đăng nhập thành công')
        // }else{
        //     alert ('Please verify email!')

        // }
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}
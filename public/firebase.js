// Initialize Firebase
var config = {
  apiKey: "AIzaSyCSbKuI-VQQUfu6cMTAERL_Yvlm5pEhjGk",
  authDomain: "tech-support-ef7a0.firebaseapp.com",
  databaseURL: "https://tech-support-ef7a0.firebaseio.com",
  storageBucket: "tech-support-ef7a0.appspot.com",
  messagingSenderId: "178463845126"
};
firebase.initializeApp(config);


// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'loggedin.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);





/*function getUser(name, location){
  var userId = firebase.auth().currentUser
}*/

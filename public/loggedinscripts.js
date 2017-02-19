var config = {
  apiKey: "AIzaSyCSbKuI-VQQUfu6cMTAERL_Yvlm5pEhjGk",
  authDomain: "tech-support-ef7a0.firebaseapp.com",
  databaseURL: "https://tech-support-ef7a0.firebaseio.com",
  storageBucket: "tech-support-ef7a0.appspot.com",
  messagingSenderId: "178463845126"
};
firebase.initializeApp(config);


initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var providerData = user.providerData;
      user.getToken().then(function(accessToken) {
        document.getElementById('sign-in-status').textContent = 'Signed in';
        document.getElementById('sign-in').textContent = 'Sign out';
        document.getElementById('account-details').textContent = JSON.stringify({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified,
          photoURL: photoURL,
          uid: uid,
          accessToken: accessToken,
          providerData: providerData
        }, null, '  ');
      });
    } else {
      // User is signed out.
      document.getElementById('sign-in-status').textContent = 'Signed out';
      document.getElementById('sign-in').textContent = 'Sign in';
      document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp()
});


function collectUserForm(){
    var clientname = $('clientname').submit();
    var device1 = $('device1').submit();
    var device2 = $('device2').submit();
    var device3 = $('device3').submit();

    var userData = {
      clientname: clientname,
      device1: device1,
      device2: device2,
      device3: device3
    };

    return userData;
}

//database stuff

var database = firebase.database();

function writeUserData(userData){
  firebase.database().ref('users/' + name).set({
    name: userData.clientname,
    device1: userData.device1,
    device2: userData.device2,
    device3: userData.device3
  });

}

document.getElementById('submitUserData').onclick = function submitUserData(){
    var userData =collectUserForm();
    writeUserData(userData);
    console.log(writeUserData(userData));
}

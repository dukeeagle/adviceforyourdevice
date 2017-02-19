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
    var clientname = $('#clientname').val();
    var device1 = $('#device1').val();
    var device2 = $('#device2').val();
    var device3 = $('#device3').val();

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
  var username = userData.clientname;
  firebase.database().ref('users/' + name + "/").push({

      clientData: {
        name: userData.clientname,
        device1: userData.device1,
        device2: userData.device2,
        device3: userData.device3,
        location: "lodge"
      }
    })
  };



document.getElementById('submitUserData').onclick = function submitUserData(){
    var userData =collectUserForm();
    writeUserData(userData);
    console.log(writeUserData(userData));
    $('#clientname').val('');
    $('#device1').val('');
    $('#device2').val('');
    $('#device3').val('');
}

function getClients(){

  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().name;
  
});
}

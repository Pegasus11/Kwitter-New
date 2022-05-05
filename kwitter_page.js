//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBD8vmOQvk9C5H5q1APXxnUZebB2WvVvY8",
      authDomain: "kwitterfirebase2.firebaseapp.com",
      databaseURL: "https://kwitterfirebase2-default-rtdb.firebaseio.com",
      projectId: "kwitterfirebase2",
      storageBucket: "kwitterfirebase2.appspot.com",
      messagingSenderId: "610894990974",
      appId: "1:610894990974:web:4fc64d33e69d319974522f"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById('msg').value = "";
}
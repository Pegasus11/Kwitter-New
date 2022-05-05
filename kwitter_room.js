
//ADD YOUR FIREBASE LINKS HERE
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
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = kwitter_page.html;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
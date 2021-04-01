var firebaseConfig = {
    apiKey: "AIzaSyC8PqtB200SjXtvmLZScEG-hgaiigjRMTw",
    authDomain: "lets-chat-3869d.firebaseapp.com",
    databaseURL: "https://lets-chat-3869d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3869d",
    storageBucket: "lets-chat-3869d.appspot.com",
    messagingSenderId: "297015450683",
    appId: "1:297015450683:web:8b3b49256405da7c44d01e",
    measurementId: "G-34020NYN7W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "";

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_name);
                row = "<div class='room_name' id="+Room_name+ "onclick='redirectToRoomName(this.id)' >#" + Room_name + "</div><hr>";
                document.getElementById("output").innerHTML += row; 
                //End code
            });
        });
}

getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "lets_chat_page.html";

}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyCn5ze3pbp4qkg5WZrTxQAPIi2i-Zx9fQM",
    authDomain: "chat-app-7bd56.firebaseapp.com",
    databaseURL: "https://chat-app-7bd56.firebaseio.com",
    projectId: "chat-app-7bd56",
    storageBucket: "chat-app-7bd56.appspot.com",
    messagingSenderId: "123235561290",
    appId: "1:123235561290:web:29d0624c09d2664bf35bb3",
    measurementId: "G-NWQGD29YSZ"
  };

  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
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
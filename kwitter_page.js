 
const firebaseConfig = {
      apiKey: "AIzaSyBh-LmbX6BS1ECuaQ2eH-ejw20jAjPJnxg",
      authDomain: "kwitter-4d9d4.firebaseapp.com",
      databaseURL: "https://kwitter-4d9d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d9d4",
      storageBucket: "kwitter-4d9d4.appspot.com",
      messagingSenderId: "127448574130",
      appId: "1:127448574130:web:d7ced9394dbc72032201ab"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //start code
 console.log(firebase_message_id) ;
 console.log(message_data);
 Name = message_data['name'];
 message = message_data['message'];
 like = message_data['like'];
 Name_with_tag = "<h4>"+ Name +"<img class='user_trick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
 like_buton ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updatedLike(this.id)'>"  
 span_with_tag = "span class='glyphicon glyphion-thumbs-up'>Like:"+ like +"</span></button><hr>";
 
 row = Name_with_tag + message_with_tag + like_buton + span_with_tag;
 document.getElementById("output").innerHTML +=row;
  
  
  //end code
   } });  }); }
getData();
function updatedLike(firebase_message_id)
{
console.log("clicked on like button -" +message_id)
button_id - message_id;
likes = document.getElementById(button_id).value
updated_likes = Number(likes)+ 1 ;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update(
{
like : updated_likes
});

}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  
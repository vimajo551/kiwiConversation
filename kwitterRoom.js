const firebaseConfig = {
  apiKey: "AIzaSyDojtQ2uKj3UjNIFbKU1mt7fnHeiz-8aIY",
  authDomain: "conversa-d2bb8.firebaseapp.com",
  databaseURL: "https://conversa-d2bb8-default-rtdb.firebaseio.com",
  projectId: "conversa-d2bb8",
  storageBucket: "conversa-d2bb8.appspot.com",
  messagingSenderId: "317353238289",
  appId: "1:317353238289:web:ec6e99b446b2e7bb24b6b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADICIONE SEUS LINKS FIREBASE

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";


function addRoom()
{
 input_name=document.getElementById("roomName").value;
 firebase.database().ref("/").child(input_name).update({
  purpose:"addRoom"
 
 })
 localStorage.setItem("chave",input_name);
 window.location="kwitterPage.html"
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
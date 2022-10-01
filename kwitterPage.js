var firebaseConfig = {
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
    userName = localStorage.getItem("userName") 
    roomName = localStorage.getItem("chave") 
function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(roomName).push({
            name:userName,
            mensagem:msg,
            like:0
        })
        msg=document.getElementById("msg").value=""
}
function getData(){ 
    firebase.database().ref("/"+roomName).on('value', function(snapshot) {
         document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
             childKey  = childSnapshot.key;
             childData = childSnapshot.val();
            if(childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                
                //Início do código
                name=messageData['name']
                mensagem = messageData['mensagem']
                like = messageData['like']
                nameTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                messageTag = "<h4 class='message_h4'> "+ mensagem +"</h4>"
                likeButton = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
                spanTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                row = nameTag+messageTag+likeButton+spanTag;
                document.getElementById("output").innerHTML += row;
                //Fim do código

 } });  }); }

getData();

function updateLike(messageId){
    btnId = messageId;
    likes = document.getElementById(btnId).value;
    updateLikes = Number(likes)+1;
    firebase.database().ref(roomName).child(messageId).update({like:updateLikes})
}
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
        window.location = "index.html";
    }

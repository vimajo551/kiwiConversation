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
function addUser() {

  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose:"add user"
  })
  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html";
}


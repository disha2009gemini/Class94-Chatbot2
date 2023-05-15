const firebaseConfig = {
  apiKey: "AIzaSyB9uBgKXpjbcOreiUET-uHYrP133I3_7Z8",
  authDomain: "class94-chatbot.firebaseapp.com",
  databaseURL: "https://class94-chatbot.firebaseio.com",
  projectId: "class94-chatbot",
  storageBucket: "class94-chatbot.appspot.com",
  messagingSenderId: "703802582318",
  appId: "1:703802582318:web:a191f25f0a83107d4d46bf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name", user_name);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

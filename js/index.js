// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEBggyIXxq_uPFgh2Ya7SbOG8ULKEI6mo",
  authDomain: "shop-vogue-49614.firebaseapp.com",
  databaseURL: "https://shop-vogue-49614.firebaseio.com",
  projectId: "shop-vogue-49614",
  storageBucket: "shop-vogue-49614.appspot.com",
  messagingSenderId: "587453501157",
  appId: "1:587453501157:web:cdf61a85bba70d44ff4e0c",
  measurementId: "G-BVW6GX1QRJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  alert("Signed Up");
 }

 function signIn(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed In " +  email.value);
  //Take user to different page or home page
 }

 


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
  
  var detailsRef = firebase.database().ref('book-details');

// Listen for form submit
document.getElementById('booking-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  
  // Get values
  let service = document.querySelector("#selectService").value;
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phoneno = getInputVal('phoneno');
  var address = getInputVal('address');

  // Save message
  saveDetails(service,name, email, phoneno, address);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('booking-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save info to firebase
function saveDetails(service,name, email, phoneno, address){
  var newDetailsRef = detailsRef.push();
  newDetailsRef.set({
    serviceBooked: service,
    name: name,
    email:email,
    phoneno:phoneno,
    address:address
  });
}


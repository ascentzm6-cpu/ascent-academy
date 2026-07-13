import { auth } 
from "./firebase.js";


import {
onAuthStateChanged,
signOut
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const welcome = document.getElementById("welcome");

const logoutBtn = document.getElementById("logout");



onAuthStateChanged(auth,(user)=>{


if(user){


welcome.innerHTML =
"Welcome to Ascent Academy";


console.log(
"Logged in user:",
user.email
);


}

else{


window.location.href =
"login.html";


}



});





logoutBtn.addEventListener("click",async()=>{


await signOut(auth);


window.location.href =
"login.html";


});
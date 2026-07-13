import { auth } 
from "./firebase.js";


import { 
signInWithEmailAndPassword 
} 
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const form = document.getElementById("loginForm");

const message = document.getElementById("message");




form.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;



const password =
document.getElementById("password").value;




try{


await signInWithEmailAndPassword(

auth,

email,

password

);



message.innerHTML =
"Login successful!";



setTimeout(()=>{


window.location.href =
"student-dashboard.html";


},1500);



}



catch(error){


message.innerHTML =
"Invalid email or password";


}



});
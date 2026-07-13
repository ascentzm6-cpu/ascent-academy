import { auth, db } 
from "./firebase.js";


import { 
createUserWithEmailAndPassword 
} 
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
doc,
setDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





const form = document.getElementById("registerForm");

const message = document.getElementById("message");





form.addEventListener("submit", async(e)=>{


e.preventDefault();



const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;



try{


// Create Firebase account

const userCredential = 
await createUserWithEmailAndPassword(
auth,
email,
password
);



const user = userCredential.user;




// Save extra user information

await setDoc(
doc(db,"users",user.uid),
{


name:name,

email:email,

role:"student",

createdAt:new Date()


}

);




message.innerHTML =
"Account created successfully!";



// Redirect

setTimeout(()=>{

window.location.href=
"student-dashboard.html";


},2000);



}



catch(error){


message.innerHTML =
error.message;


}



});
import { auth }

from "./firebase.js";


import {

sendPasswordResetEmail

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




const form = document.getElementById("resetForm");

const message = document.getElementById("message");





form.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;



try{


await sendPasswordResetEmail(
auth,
email
);



message.innerHTML =
"Password reset email sent. Check your inbox.";



}


catch(error){


message.innerHTML =
error.message;


}



});

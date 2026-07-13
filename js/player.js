import {auth}
from "./firebase.js";


import {
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



onAuthStateChanged(auth,(user)=>{


if(!user){

window.location.href="login.html";

}


});






let progress = 0;


const button =
document.getElementById("completeBtn");


const bar =
document.getElementById("progressBar");


const text =
document.getElementById("progressText");




button.addEventListener("click",()=>{


progress = 20;


bar.style.width =
progress+"%";


text.innerHTML =
progress+"%";



button.innerHTML =
"Lesson Completed ✓";


});
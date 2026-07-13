import { initializeApp } 
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getAuth } 
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import { getFirestore } 
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {


apiKey: "AIzaSyBQVga_8YJraT4bGArGTpKW4Emk5UXZ4L4",

authDomain: "ascent-zm.firebaseapp.com",

projectId: "ascent-zm",

storageBucket: "ascent-zm.firebasestorage.app",

messagingSenderId: "768865175063",

appId: "1:768865175063:web:a21915c176212d9a237e52"


};



const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);


export const db = getFirestore(app);
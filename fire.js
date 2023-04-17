import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqwGYuTgHxvfSGUPAKziFR0xAQ_muzxyA",
    authDomain: "puzzles-5e9b1.firebaseapp.com",
    databaseURL: "https://puzzles-5e9b1-default-rtdb.firebaseio.com",
    projectId: "puzzles-5e9b1",
    storageBucket: "puzzles-5e9b1.appspot.com",
    messagingSenderId: "500195356378",
    appId: "1:500195356378:web:479963ce42d12d46e43fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
var userId = null;
var signin = document.getElementById('signin');
if(signin!=null){
    signin.addEventListener('click', (e) => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('pass').value;
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // window.location.href = "puzzle0.html"
                const dt = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: dt,
                })
                userId = user.uid;
                window.location.href = 'puzzle0.html';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
    
                alert(errorMessage);
            });
    
    });
}
console.log(userId);

export default userId;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, child, set, get, ref, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// import userId from './fire.js'
// console.log(userId);
const firebaseConfig = {
    apiKey: "AIzaSyAqwGYuTgHxvfSGUPAKziFR0xAQ_muzxyA",
    authDomain: "puzzles-5e9b1.firebaseapp.com",
    databaseURL: "https://puzzles-5e9b1-default-rtdb.firebaseio.com",
    projectId: "puzzles-5e9b1",
    storageBucket: "puzzles-5e9b1.appspot.com",
    messagingSenderId: "500195356378",
    appId: "1:500195356378:web:479963ce42d12d46e43fe3"
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();
if (window.location.href.includes("/index.html")) {
    console.log("login to continue");
}
else if (auth.currentUser === null) {
    // window.location.href = "/index.html"
}
const usersRef = ref(database)
var data = null
var user = null
function getData(){
get(child(usersRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        data = snapshot.val();
        console.log(snapshot.val());
    } else {
        setData([
            { "time": 0 }, { "time": 0 }, { "time": 0 }, { "time": 0 }, { "time": 0 },
        ])
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
}
// getData()



function setData(data) {
    set(ref(db, 'users/' + userId), data);
}


export function addTime(Level, Time) {
    var data_copy = [...data] 
    data_copy[Level]["time"] = Time
    setData(userId,data_copy)
    data = data_copy
}
export let counts = {
    'p1': 100000,
    'p2': 100000,
    'p3': 100000,
    'p4': 100000,
    'p5': 100000,
}
export function change(i, j){
    counts['p'+i.toString()] = j;
}
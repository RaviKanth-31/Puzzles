import {counts, change} from './db.js';
document.getElementById('Clue').addEventListener('click', (e)=>{
    alert("Inspect the page");
})
var puzzno = document.getElementById("puzzno");
var puzz = document.getElementById("puzz");
var answer, gsec=0;
fetch('puzzles/1.json')
    .then(function(response){
        return response.json();
    })
    .then(function(page){
        document.title = page['title'];
        puzzno.innerHTML = page['title'];
        puzz.innerHTML = page['question'];
        answer = page['answer'];
    })
var tim;
var timerr = document.getElementById("timetaken");
var  sec = 0, hour=0, min=0;
console.log(timerr.innerHTML);
function count(){
    tim = setInterval(()=>{
    timerr.innerText = hour+ ":" + min + ":" + sec;
    sec ++;
    gsec++;
    if(sec==60){
        min ++;
        sec = 0;
    }
    if(min==60){
        min = 0;
        sec = 0;
        hour++;
    }
}, 1000)
}
//Checking solution
var sub_btn = document.getElementById('sub_btn'); 
count();
sub_btn.addEventListener('click',(e)=>{
if(document.getElementById('ans').value==15){
    clearInterval(tim);
    change(1, gsec);
    const di = document.getElementsByClassName("confetti")[0];
    for(var i=0;i<30;i++){
        const graf = document.createElement("div");
        graf.classList.add("confetti-piece");
        di.appendChild(graf);
    }
    var next = document.getElementById("btn-next");
    next.style.visibility = 'visible';
    next.addEventListener('click', (e)=>{
        window.location.href = 'puzzle1.html';
    });
}
else{
    alert("Oops! Try Again");
}  
  });
  
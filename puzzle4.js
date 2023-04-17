document.getElementById('Clue').addEventListener('click', (e)=>{
    alert("Special day for Indians");
})
var puzzno = document.getElementById("puzzno");
var puzz = document.getElementById("puzz");
var answer, gsec=0;
fetch('puzzles/5.json')
    .then(function(response){
        return response.json();
    })
    .then(function(page){
        document.title = page['title'];
        puzzno.innerHTML = page['title'];
        puzz.innerHTML = page['question'];
        answer = page['answer'];
    })
    var prev = document.getElementById("btn-prev");
    prev.style.visibility = 'visible';
    prev.addEventListener('click', (e)=>{
        window.location.href = 'puzzle3.html';
    });
var tim;
var timerr = document.getElementById("timetaken");
var  sec = 0, hour=0, min=0;
function count(){
    tim = setInterval(()=>{
    timerr.innerText= hour+ ":" + min + ":" + sec;
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
if(document.getElementById('ans').value=="independence"){
    clearInterval(tim);
    const di = document.getElementsByClassName("confetti")[0];
    for(var i=0;i<30;i++){
        const graf = document.createElement("div");
        graf.classList.add("confetti-piece");
        di.appendChild(graf);
    }
    
    var next = document.getElementById("btn-next");
    next.style.visibility = 'visible';
    next.addEventListener('click', (e)=>{
        window.location.href = 'analytics.html';
    });
}
else{
    alert("Oops! Try Again");
}
    
  });
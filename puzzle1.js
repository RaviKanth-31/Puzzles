document.getElementById('Clue').addEventListener('click', (e)=>{
    alert("Can see something new in this page");
})
var puzzno = document.getElementById("puzzno");
var puzz = document.getElementById("puzz");
var answer, gsec=0;
fetch('puzzles/2.json')
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
        window.location.href = 'puzzle0.html';
    });
var tim;
var timerr = document.getElementById("timetaken");
var  sec = 0, hour=0, min=0;
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
if(document.getElementById('ans').value==8){
    clearInterval(tim);
    function celebrationEvent   () {
        textZone();
        bdayBallons();
        confettiZone();
        setTimeout(function(){ 
        removeElementsByClass("confetti");
        removeElementsByClass("container");
        removeElementsByClass("containerText");
        },3000)
    };
    function textZone (){
        var containerElement = document.createElement("div");
        containerElement.classList.add("containerText");
        var br = document.createElement("br");
        var labelRightElementChild = document.createElement("div");
        var textRightNode = document.createTextNode("Correct Answer");
        labelRightElementChild.append(textRightNode.cloneNode());
        labelRightElementChild.classList.add("rightText");
        labelRightElementChild.style.animation = 'slide_right 3s';
        labelRightElementChild.style.animationFillMode='forwards';
        
        var labelLeftElementChild = document.createElement("div");
        labelLeftElementChild.innerHTML="Well Done";
        labelLeftElementChild.classList.add("leftText");
        labelLeftElementChild.style.animation = 'slide_left 3s';
        labelLeftElementChild.style.animationFillMode='forwards';
        containerElement.append(labelRightElementChild);
        containerElement.append(br);
        containerElement.append(labelLeftElementChild);
        document.body.append(containerElement);
    
    }
    function confettiZone (){
        var confetti = document.createElement("div");
        confetti.classList.add("confetti");
        for(var i=0;i<19;i++){
            var confettiPiece = document.createElement("div");
            confettiPiece.classList.add("confetti-piece");
            confetti.append(confettiPiece);
        }
        document.body.append(confetti);
    }
    function bdayBallons(){
        var balloonContainer = document.createElement("div");
        balloonContainer.classList.add("container");
        for (var i = 0; i<19; i++) {
            var element = document.createElement("div");
            element.classList.add("balloon");
            balloonContainer.append(element);
            
        } 
        document.body.append(balloonContainer);
    }
    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    celebrationEvent();
    var next = document.getElementById("btn-next");
    next.style.visibility = 'visible';
    next.addEventListener('click', (e)=>{
        window.location.href = 'puzzle2.html';
    });
}
else{
    alert("Oops! Try Again");
}
    
  });
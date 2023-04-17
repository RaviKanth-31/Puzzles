for(var i=1;i<6;i++){
    var num = Math.random()*3;
    var dif;
    if(num>0 && num<1) dif = 'Less';
    else if(num>=1 && num<2) dif = 'Medium';
    else dif = 'High';
document.getElementById('puz' + i.toString()).innerHTML = dif;
}
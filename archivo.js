document.getElementById('player').addEventListener("mouseover", sumarpuntos);
puntos=0;
tiempo=15;
necesarios=15;

function sumarpuntos(){
puntos++;
document.getElementById("puntos").innerHTML="Puntos:<b>"+puntos+"/"+necesarios+" </b>";
randNum1=Math.round(Math.random()*400);
randNum2=Math.round(Math.random()*400);

randNum3=Math.round(Math.random()*300);
randNum4=Math.round(Math.random()*100);
randNum5=Math.round(Math.random()*50);

document.getElementById("player").style.marginTop=randNum1+"px";
document.getElementById("player").style.marginLeft=randNum2+"px";

document.getElementById("player2").style.marginTop=randNum2+"px";
document.getElementById("player2").style.marginLeft=randNum1+"px";
document.getElementById("player2").style.width=randNum5+"px";
document.getElementById("player2").style.height=randNum5+"px";
document.getElementById("player2").style.borderRadius=randNum5+"px";


document.getElementById("player3").style.marginTop=randNum3+"px";
document.getElementById("player3").style.marginLeft=randNum4+"px";
document.getElementById("player3").style.width=randNum5+"px";
document.getElementById("player3").style.height=randNum5+"px";
document.getElementById("player3").style.borderRadius=randNum5+"px";

document.getElementById("player4").style.marginTop=randNum4+"px";
document.getElementById("player4").style.marginLeft=randNum3+"px";
document.getElementById("player4").style.width=randNum5+"px";
document.getElementById("player4").style.height=randNum5+"px";
document.getElementById("player4").style.borderRadius=randNum5+"px";

document.getElementById("player5").style.marginTop=randNum4+"px";
document.getElementById("player5").style.marginLeft=randNum4+"px";
document.getElementById("player5").style.width=randNum5+"px";
document.getElementById("player5").style.height=randNum5+"px";
document.getElementById("player5").style.borderRadius=randNum5+"px";

document.getElementById("player6").style.marginTop=randNum3+"px";
document.getElementById("player6").style.marginLeft=randNum3+"px";
document.getElementById("player6").style.width=randNum5+"px";
document.getElementById("player6").style.height=randNum5+"px";
document.getElementById("player6").style.borderRadius=randNum5+"px";

document.getElementById("player7").style.marginTop=randNum4+"px";
document.getElementById("player7").style.marginLeft=randNum1+"px";
document.getElementById("player7").style.width=randNum5+"px";
document.getElementById("player7").style.height=randNum5+"px";
document.getElementById("player7").style.borderRadius=randNum5+"px";

if(puntos==15){
    alert("ganaste");
    tiempo=15;
    puntos=0;
}
}

function restartiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML=" tiempo: "+ tiempo;
    if(tiempo==0){
        alert("perdiste");
        tiempo=15;
        puntos=0;
    }
}

setInterval(restartiempo,1000);
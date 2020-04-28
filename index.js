//var name1=prompt("Enter first player first name: ");
//var name2=prompt("Enter second player first name: ");


var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="image/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="image/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage1);

/*document.querySelector(".p1").innerHTML(name1);
document.querySelector(".p2").innerHTML(name2);*/


if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Oops! Draw 😯";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins 🏆";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins 🏆";
}

var randomNumber1 = Math.floor(Math.random(1,6)* 6 )+ 1;
var randomNumber2 = Math.floor(Math.random(1,6)* 6 )+ 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"
var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomSourceImage1 = "images/" + randomDiceImage1;
var randomSourceImage2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[0].setAttribute("src", randomSourceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent = "Draw";

}
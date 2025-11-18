var player1Score = 0;
var player2Score = 0;
function player1(){
    var diceNumber = Math.floor(Math.random()*6)+1;
    var imageSource = `images/dice${diceNumber}.png`;
    document.getElementById("dice1").setAttribute("src",imageSource);
    return diceNumber;
}
function player2(){
    var diceNumber = Math.floor(Math.random()*6)+1;
    var imageSource = `images/dice${diceNumber}.png`;
    document.getElementById("dice2").setAttribute("src",imageSource);
    return diceNumber;
}
function result(){
    var score1 = player1();
    var score2 = player2();
    if (score1>score2){
        player1Score++;
        document.getElementById("score1").innerText = player1Score;
        document.querySelector("h1").innerText = "Player 1 Wins!";
    }else if(score2>score1){
        player2Score++;
        document.getElementById("score2").innerText = player2Score;
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }else{
        document.querySelector("h1").innerText = "It's a Draw!";
    }
}
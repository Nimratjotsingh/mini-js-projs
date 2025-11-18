function player1(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    document.getElementById("img1").setAttribute("src", randomImageSource);
    return randomNumber1;
}

function player2(){
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	var randomDiceImage = "dice" + randomNumber2 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
	document.getElementById("img2").setAttribute("src", randomImageSource);
	return randomNumber2;
}
function refreshPage(){
    var p1 = player1();
    var p2 = player2();
    if(p1 > p2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if(p2 > p1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
    document.querySelector(".btn").innerHTML = "Play Again";
}
$("h1").addClass("big-title margin-50");

//text manipulation

$("h1").text("Bye");
//it changes all the h1 elements text to "Bye"
$("button").text("Don't click me");
//it changes all the button elements text to "Don't click me"

//html manipulation
$("button").html("<i> Heyy </i>");



var isClicked = false;
var originalSrc = "https://play-lh.googleusercontent.com/LpgnH_rHqhJzlJ-uWhfMj3w87cu6iWV5m1hr6eos1wmdlqRiF0RsNE1RBmgtsPvyyBI";

$("button").click(function(){
	if(isClicked === false){
		isClicked = true;
		$("img").attr("src","https://cdn.educba.com/academy/wp-content/uploads/2019/05/what-is-jquery-1.png");

	}else{
		isClicked = false;
		$("img").attr("src", "https://play-lh.googleusercontent.com/LpgnH_rHqhJzlJ-uWhfMj3w87cu6iWV5m1hr6eos1wmdlqRiF0RsNE1RBmgtsPvyyBI");
	}
});

$(document).keypress(function(event){
	$("h1").text(event.key)
});
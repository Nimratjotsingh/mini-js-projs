// First Way

document.querySelectorAll(".drum").forEach(function(button){
    button.addEventListener("click", handleClick)
});
function handleClick(){
    alert("I got clicked!");
} 

/*Second Way
var drumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<=drumButtons; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		alert("The Button has been pressed");
	}); 
} */
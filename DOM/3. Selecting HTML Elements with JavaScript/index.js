document.query

//SelectorAll("li") {
console.log(document.getElementsByTagName("li"));

// 1. Changes the color of the third <li> element to green.
document.querySelectorAll("li")[2].style.color = "green";

// 1 & 2 both can be used to search for elements

// 2. Tells the number of items in li
console.log(document.getElementsByTagName("li").length);

//This also returns array and can be used to search elements with class name, so directly we can use functions instead we have to specify
document.getElementsByClassName("btn");

// Search element by ID & manupulating it
console.log(document.getElementById("title").innerHTML = "Goodbye");

// Search element
document.querySelector("button").style.backgroundColor = "yellow";

// You will only get the first element that matches the selector
document.querySelector("li.list");

// If we want all the elements that match the selector
document.querySelectorAll("li.list");

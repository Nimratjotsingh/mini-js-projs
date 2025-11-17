console.log(document);
console.log(document.firstElementChild);
console.log(document.firstElementChild.firstElementChild);
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// Changes the content of the <h1> element
heading.innerHTML = "Hello DOM!";

// Changes the color of the <h1> element to blue
heading.style.color = "blue";

// Helps in searching elements in the DOM and performs actions on them
document.querySelector("input").click();

// Changes the content of the last <li> element inside the <ul>
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Nimrat";
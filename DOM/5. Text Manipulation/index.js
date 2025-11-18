//First way {proper way}
document.getElementById("myParagraph").textContent = "Hello World!";

//Second way {not proper way as it gives the whole html inside the h1}
document.querySelector("h1").innerHTML = "Hiee World!";
//second way for example
document.querySelector("h1").innerHTML = "<em>Hiee World!</em>";

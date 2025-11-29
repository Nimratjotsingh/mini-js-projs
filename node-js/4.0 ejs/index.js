import express from "express";
const app = express();
const port = 3000;

const date = new Date();
const day = date.getDay();

var dayType = "";
var advice = "";

function dateria(){
    if (day === 0 || day === 6  ){
        dayType = "the weekend";
        advice = "its time to relax";
    }else{
        dayType = "a weekday";
        advice = "its time to work hard";
    }
}
dateria();

app.get("/", (req, res) => {
  res.render("index.ejs",{dayType, advice});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

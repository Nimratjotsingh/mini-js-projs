import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req,res)=>{
    var data = {};
    res.render("index.ejs");
})

app.post("/submit",async(req,res)=>{
    try{
        const type = req.body.type;
        const participants = req.body.participants;
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
        const result = response.data;
        res.render("index.ejs",{data: result[Math.floor(Math.random()*response.data.length)]})
    }catch(error){
        console.log(error);
        res.render("index.ejs", {error: error});
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
import bodyParser from 'body-parser';
import express from 'express';
import pg from 'pg';

import dotenv from "dotenv";
dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});


const app = express();
const port = 3000;

let quizData = [];
db.connect();

db.query("SELECT * FROM capitals", (err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        quizData = res.rows;
    }
})

let currentQuestion = {};

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

let totalScore = 0;

app.get('/', (req, res) => {
    randomQuestion();
    res.render('index.ejs', {question: currentQuestion, score: totalScore});
});

app.post('/answer', (req, res) => {
    if(req.body.answer === undefined || req.body.answer === null || req.body.answer.trim() === ''){
        res.render('index.ejs', {question: currentQuestion, score: totalScore, message: 'Please write an answer'});
        return;
    }
    const answer = req.body.answer.trim();
    const correctAnswer = currentQuestion.capital.trim();

    if(answer.toLowerCase() === correctAnswer.toLowerCase()){
        var score = totalScore + 1;
        totalScore++;                                        
        randomQuestion();
        res.render('index.ejs', {question: currentQuestion, score: score, message: 'Correct Answer'});
    }else{
        totalScore = 0;
        randomQuestion();
        res.render('index.ejs', {question: currentQuestion, score: totalScore, message: `Wrong Answer! The correct answer was ${correctAnswer}`});
    }
});

function randomQuestion(){
    const randomQueestion = quizData[Math.floor(Math.random() * quizData.length)];
    currentQuestion = randomQueestion;
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
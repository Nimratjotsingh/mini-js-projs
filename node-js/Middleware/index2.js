import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

//app.use(morgan("tiny"));
app.use((req, res, next) => {
  console.log(`Request received and method is ${req.method}`);
  next();
})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

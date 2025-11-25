import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile("home.html", { root: __dirname }

    );
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});
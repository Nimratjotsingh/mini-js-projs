import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

function readBlogs() {
    if (!fs.existsSync("blogs.json")) return [];
    let data = fs.readFileSync("blogs.json").toString();
    if (data.trim() === "") return [];
    return JSON.parse(data);
}


app.get("/", (req, res) => {
    const blogs = readBlogs();
    res.render("index.ejs",{blogs});
});

app.get("/create", (req,res)=>{
    res.render("create-blog.ejs");
});

app.post("/submit", (req, res)=>{
    const blogs = readBlogs();

    const newBlog = {
        title: req.body["title"],
        content: req.body["content"],
        id: Date.now(),
        createdAt : new Date()
    };
    blogs.push(newBlog);

    fs.writeFileSync("blogs.json", JSON.stringify(blogs, null, 2));

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const blogs = readBlogs();
    const id = req.params.id;

    const updatedBlogs = blogs.filter(blog => blog.id != id);

    fs.writeFileSync("blogs.json", JSON.stringify(updatedBlogs, null, 2));

    res.redirect("/");
});

app.get("/blog/:id", (req, res) => {
    const blogs = readBlogs();
    const id = req.params.id;

    const blog = blogs.find(blog => blog.id == id);

    res.render("blog.ejs", {blog});
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
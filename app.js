const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/",(req,res) =>{
    res.render("index", {
        pageTitle: "Zajęcia dotyczące NodeJS"
    });
});

app.get("/about",(req,res) =>{
    const x = 15;
    if (x == 10){
        res.render("about");    
    } else 
    { res.render("abc");}
});

app.get("/about/marcin",(req,res) =>{
    res.send("<h1> Strona o mnie </h1> <h3> Marcin Dłubis </h3> <div> lorem </div>");
});

app.get("/katowice",(req,res) =>{
    res.send("<h1> Strona o Katowicach </h1>"); 
});

app.listen(port, err => {
    if (err) {
        return console.log(`Błąd ${err}`);
    }
    console.log(`Strona działa na porcie ${port}`);
});
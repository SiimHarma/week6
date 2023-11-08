//alustan uut nädalat luues uus kaust weekX, sinna sisse uus fail server.js, avan terminali ja kirjutan: npm init -y, luuakse package.json fail (selleks vajalik node.js rakendust)
const express = require("express");
const port = 3000;
const booksRouter = require("./routes/books");
const countriesRouter = require("./routes/countries");

const app = express(); //loome ja kutsume välja rakenduse (initsialiseerimine)

app.set("view engine", "ejs");

//päringutele vastamine (GET)

app.get("/", (req, res) =>{
    //res.send("<h1> Hello from app get /</h1>");
    //res.sendStatus(500);
    //res.status(500).json({message: "Internal error. Try again later." });
    //res.download("server.js");
    res.render("index");
});


app.use("/books", booksRouter);
app.use("/countries", countriesRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
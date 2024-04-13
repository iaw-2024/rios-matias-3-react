const express = require("express");
const app = express();
const books = require("./data/books");
const path = require("path")

app.get("/datos", (req, res)=>{
    res.status(200).send({
        books
    })
});
//app.use(express.static('public'))
app.use(express.static(path.resolve(__dirname, "..", "client", "build")));


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
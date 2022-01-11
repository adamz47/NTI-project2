const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const data = path.join(__dirname, "../public");
app.use(express.static(data));
app.set("view engine", "hbs");
const public = path.join(__dirname, "../views");
const news = require("../files/news.js");

app.get('/',(req,res) => {
    news((error,response) => {
        if(error) {
            return res.send({error})
        }
        res.render('index',{response})
    })
})

app.listen(port, () => {
  console.log("running on port 5000");
});

const express = require("express");
const cors = require("cors");
const app = express();
const about = require("./json/about.json");
const portfolio = require("./json/portfolio.json");

app.use(cors());

const port = process.env.PORT || 8080; //Que es cuche PORT y si esta vacia, escucha el puerto 8080

// rutas
app.get('/', (req,res) => {
    res.send('Hola,respondo')
});

app.get('/about', (req,res) => {
    res.json(about)
});

app.get('/portfolio', (req,res) => {
    res.json(portfolio)
});



app.listen(port,()=> {
    console.log(`Server on : ${port}`);
});
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080; //Que es cuche PORT y si esta vacia, escucha el puerto 8080

app.listen(port,()=> {
    console.log(`Server on : ${port}`);
});
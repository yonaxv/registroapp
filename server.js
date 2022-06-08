
var cors = require('cors')
// variables de entorno
require("dotenv").config();

//conexion a la base de datos
require('./database/conexion');

const express = require("express");
const app = express();


//MIDDLEWARES
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())



const port = process.env.PORT;

//Rutas
app.use("/api",require("./routes"));

app.listen(port,()=>{
    console.log(`Server on port http:localhost:${port}`);
})
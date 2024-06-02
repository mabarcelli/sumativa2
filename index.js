

const express = require ("express");
const app = express();
const cors = require("cors");
const puerto = 2006;



//----------------------------------

const { getDccomics, getDccomicId }= require ("././controllers/dccomics.controllers")
app.use(cors());

app.get("/", getDccomics)

app.get("/:id", getDccomicId)


//------------------------------------

app.listen(puerto, ()=>{
    console.log("hola, esta bien el ctrabajo")
    console.log(`servidor arriba en el puerto ${puerto}`)
});
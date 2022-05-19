const express = require('express');
const app = express();

const path=require('path')


const PORT = 3000;

app.listen(PORT,()=> console.log("Estamos corriendo en el puerto:" + PORT));

app.use(express.static(path.join(__dirname,"/public")));





app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get('/register',(req,res)=>{

    res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get('/ingreso',(req,res)=>{

    res.sendFile(path.join(__dirname,"/views/ingreso.html"))
})
app.get('/carrito',(req,res)=>{

    res.sendFile(path.join(__dirname,"/views/carrito.html"))
})


const express= require('express')
const app= express()

app.get('/',  (req , res)=>{
    console.log('Peticion recibida')
    res.send('<h1>hola mundo <br>Soy Cristian Chunza</br></h1>')
})

app.listen(4000,()=>{
    console.log('Servidor escuchando el el puerto 4000')
})
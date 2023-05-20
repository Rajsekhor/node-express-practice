const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    console.log('User hit the resource')
    res.status(200).send(`Home Page`)
})

app.get('/about',(req,res)=>{
    console.log('User hit the resource')
    res.status(200).send(`About Page`)
})

app.all('*',(req,res)=>{
    console.log('User hit the resource')
    res.status(404).send(`Page not found`)
})

app.listen(5000,()=>{
    console.log(`Server is listening on port 5000`)
})
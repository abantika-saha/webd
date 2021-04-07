const express = require("express");
const app = express()
// console.dir(app)
// app.use((req,res)=>{
//     console.log("We got a new Request!")
//     res.send('<h1>This is my web-page</h1>')
// })

app.get('/dogs',(req,res)=>{
    console.log("Dog Response")
    res.send('<h2>Dog Page</h2>')
})
app.get('/',(req,res)=>{
    console.log("Home PAGE Response")
    res.send('<h2>Welcome to Home Page</h2>')
})
app.get('*',(req,res)=>{
    console.log("Donno")
    res.send('<h2>Do not know this path</h2>')
})
app.listen(8080,() =>{
    console.log("LISTENING ON PORT 8080!")
})
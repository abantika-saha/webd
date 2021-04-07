const express = require("express");
const app = express()
// console.dir(app)
app.use((req,res)=>{
    console.log("We got a new Request!")
    res.send('<h1>This is my web-page</h1>')
})
app.listen(8080,() =>{
    console.log("LISTENING ON PORT 8080!")
})
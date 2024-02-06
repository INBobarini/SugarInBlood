import express from "express"
import {handler} from "./svelte/build/handler.js"







const app = express()
const port = 3000

//demo route

fetch


app.get("/expressroute",(req,res)=>{
    res.send("This is an expres route!")
})

//connects svelte kit app to express server
app.use(handler)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
import express from "express";

const app = express();
const port = 3301;



app.get('/',(req , res)=>{
    res.json({msg: "hello student"});
})

app.listen(port,()=>{
    console.log(`this server running at http://localhost${port} `);
});






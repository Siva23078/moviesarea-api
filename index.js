import express from "express";

const app = express();
const port = 3301;



app.get('/',(req , res)=>{
    res.json({msg: "hello student"});
})

// crud functianaly movies

//r -for reading
app.get("/movies", ()=>{

})
// c -for creating movies
app.post("/movie",()=>{

}) 

// u - for updating movies
app.put("/movie:id",()=>{

})

// d - for delete movies

app.delete(".movies:id",()=>{

})

app.listen(port,()=>{
    console.log(`this server running at http://localhost${port} `);
});


// 





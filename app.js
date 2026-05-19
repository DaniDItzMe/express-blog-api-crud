const express = require("express");
const postRouter = require("./routers/postsRouter")
const app = express();
const Handle404 = require("./middlewares/Handle404")
const HandleErrors = require("./middlewares/HandleErrors")

app.use(express.static("public"))
app.use(express.json())
app.use("/posts", postRouter);
const port = 3333;

const posts = require("./data/posts");

app.get("/", (req,res) =>{

    res.send("Server del mio blog")

})

app.get("/errorTest", (req,res, next)=>{

    const error = new Error("Error test");
    console.log(error);
    
    next(error)

})

app.get("/bacheca", (req,res) => {

    res.json(posts)

})
app.use(HandleErrors)
app.use(Handle404)

app.listen(port, ()=> {

    console.log(`Server in ascolto sulla porta ${port}`);
    
})
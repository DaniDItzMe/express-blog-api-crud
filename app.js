const express = require("express");
const postRouter = require("./routers/postsRouter")
const app = express();


app.use(express.static("public"))
app.use(express.json())
app.use("/posts", postRouter);
const port = 3333;

const posts = require("./data/posts");

app.get("/", (req,res) =>{

    res.send("Server del mio blog")

})

app.get("/bacheca", (req,res) => {

    res.json(posts)

})

app.listen(port, ()=> {

    console.log(`Server in ascolto sulla porta ${port}`);
    
})
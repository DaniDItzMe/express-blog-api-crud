import express from "express"
import postRouter from "./routers/postsRouter.js"
import cors from "cors"
const app = express();


app.use(express.static("public"))
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/posts", postRouter);
const port = 3333;

import posts from "./data/posts.js"
app.get("/", (req,res) =>{

    res.send("Server del mio blog")

})

app.get("/bacheca", (req,res) => {

    res.json(posts)

})

app.listen(port, ()=> {

    console.log(`Server in ascolto sulla porta ${port}`);
    
})
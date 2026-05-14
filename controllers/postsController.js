const posts = require("../data/posts")


function Index(req,res){

    const {tag} = req.query;
    console.log(tag);
    
    let filteredPosts = posts;

    if(tag){

        filteredPosts = posts.filter(post => {
            return post.tags.includes(tag);
        })

    }

    res.json(filteredPosts)

}


function Show(req,res){

    const {id} = req.params;

    const filteredPost = posts.filter(post => {
        return post.id == id
    })

    if(filteredPost.length>0){

        res.json(filteredPost);
    }else{

        res.status(404).json({
            success: false,
            message: "Nessun post trovato con questo id"
        })

    }


}

function Create(req,res) {

    res.json("Creazione di un nuovo post");

}


function Update(req, res){

    const {id} = req.params;

    res.json("Modifica del post con id: " + id);

}

function PartiallyUpdate(req,res){

    const {id} = req.params;

    res.json("Modifica parziale del post con id: " + id);

}

function Destroy(req,res){

    const {id} = req.params;

    const post = posts.find(post => post.id == parseInt(id));

    if(post){
        

        posts.splice(posts.indexOf(post), 1);
        console.log(posts);
    
        res.sendStatus(204)

    }else{

        res.status(404).json({
            success: false,
            message: "Nessun post trovato con questo id"
        })

    }


}

module.exports = {Index, Show, Create, Update, PartiallyUpdate, Destroy}
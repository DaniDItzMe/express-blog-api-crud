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

    console.log(req.body);

    const newId = posts[posts.length -1].id + 1;
    const newElement = {
        id: newId,
        ...req.body
    }
    posts.push(newElement);
    
    res.status(201).json(newElement);

}


function Update(req, res){

    const {id} = req.params;
    
    const element = posts.find(post => post.id == parseInt(id));
    if(element){

        for(let prop in req.body){
            element[prop] = req.body[prop];
            
        }

        res.status(200).json(element)
    }else{

        res.status(404).json({
            success: false,
            message: `Post con id ${id} non trovato`
        })

    }


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
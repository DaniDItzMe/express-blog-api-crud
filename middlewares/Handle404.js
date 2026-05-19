function Handle404(req,res, next){

    res.status(404).send("Pagina non trovata. Errore 404");

}

module.exports = Handle404;
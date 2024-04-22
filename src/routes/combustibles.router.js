const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    var GLP = req.body.GLP;
    var diesel = req.body.diesel;
   
    
    var factor_emision = 2
    var huella_combustibles = diesel*factor_emision + GLP
    try{
        huella = req.session.user
        huella.huella_combustibles=huella_combustibles
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        if(tipo == "mixto"){
            res.redirect("/equipos/mixto")
        }else{
            res.redirect("/equipos/presencial")
        }
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})





module.exports = router;
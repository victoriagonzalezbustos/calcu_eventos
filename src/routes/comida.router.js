const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    var comida = req.body.comida;
 
    
    var factor_emision = 2
    var huella_comida = comida*factor_emision
    try{
        huella = req.session.user
        huella.huella_comida=huella_comida
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        if(tipo == "mixto"){
            res.redirect("/residuos/mixto")
        }else{
            res.redirect("/residuos/presencial")
        }
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})





module.exports = router;
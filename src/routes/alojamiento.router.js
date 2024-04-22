const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    var plazas = req.body.plazas;
    var factor_emision = 2
    var huella_alojamiento = plazas * factor_emision
    try{
        huella = req.session.user
        huella.huella_alojamiento=huella_alojamiento
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        if(tipo == "mixto"){
            res.redirect("/energia/mixto")
        }else{
            res.redirect("/energia/presencial")
        }
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})





module.exports = router;
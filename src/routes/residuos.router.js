const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    if(tipo == "mixto"){
        res.redirect("/huellacargada/mixto")
    }else{
        res.redirect("/huellacargada/presencial")
    }
/*
    try{
        huella = req.session.user
        huella.vble3=vble3
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        res.redirect("/huellacargada")
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }*/
})





module.exports = router;
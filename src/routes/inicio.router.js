const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/", async(req,res)=>{
    
    var nombre_evento = req.body.nombre_evento;
    var empresa = req.body.empresa
    var pais = req.body.pais;
    var industria = req.body.industria
    var horas = req.body.horas;
    var participantes = req.body.participantes

    try{


        huella = req.session.user
        
        huella.nombre_evento= nombre_evento
        huella.empresa= empresa
        huella.pais= pais
        huella.industria= industria
        huella.horas= horas
        huella.participantes = participantes

        await transporteModel.findByIdAndUpdate(huella._id, huella)

        res.redirect("/tipo")
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})




module.exports = router;
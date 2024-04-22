const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    var respuesta = req.body.respuesta
    if(respuesta == "Si"){

        var superficie_cubierta = req.body.superficie_cubierta;
        var energia_renovable = req.body.energia_renovable;
        var factor_emision = 2
        var huella_energia = superficie_cubierta*factor_emision + energia_renovable 
        try{
            huella = req.session.user
            huella.huella_energia=huella_energia
            await transporteModel.findByIdAndUpdate(huella._id, huella)
            if(tipo == "mixto"){
                res.redirect("/combustibles/mixto")
            }else{
                res.redirect("/combustibles/presencial")
            }
        } catch(error) {
            res.status(400).send({error: "error al cargar la huella", error})
        }

    }else{
        try{
            huella = req.session.user
            huella.huella_energia=0
            await transporteModel.findByIdAndUpdate(huella._id, huella)
            if(tipo == "mixto"){
                res.redirect("/combustibles/mixto")
            }else{
                res.redirect("/combustibles/presencial")
            }
        } catch(error) {
            res.status(400).send({error: "error al cargar la huella", error})
        }
    }


})





module.exports = router;
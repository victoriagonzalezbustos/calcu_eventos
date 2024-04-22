const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    var pantallas_led = req.body.pantallas_led;
    var monitores = req.body.monitores;
    var televisores = req.body.televisores;
    var equipos_audio = req.body.equipos_audio;
    var consolas = req.body.consolas;
    var proyectores = req.body.proyectores;

   
    
    var factor_emision = 2
    var huella_equipos = pantallas_led*factor_emision + monitores +televisores+equipos_audio+consolas+proyectores
    try{
        huella = req.session.user
        huella.huella_equipos=huella_equipos
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        if(tipo == "mixto"){
            res.redirect("/comida/mixto")
        }else{
            res.redirect("/comida/presencial")
        }
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})





module.exports = router;
const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    var camion_refrigerado = req.body.camion_refrigerado;
    var camion_no_refrigerado = req.body.camion_no_refrigerado;
    var van = req.body.van;
    
    var factor_emision = 2
    var huella_transporte_insumos = camion_refrigerado*factor_emision + camion_no_refrigerado +van
    try{
        huella = req.session.user
        huella.huella_transporte_insumos=huella_transporte_insumos
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        if(tipo == "mixto"){
            res.redirect("/alojamiento/mixto")
        }else{
            res.redirect("/alojamiento/presencial")
        }
        
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})





module.exports = router;
const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")



router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    console.log(tipo)
    var kmauto = req.body.kmauto;
    var kmcamioneta = req.body.kmcamioneta;
    var kmmoto = req.body.kmmoto;
    var kmcombi = req.body.kmcombi;
    var kmtransportepublico = req.body.kmtransportepublico;
    var kmbus = req.body.kmbus;
    var kmavion = req.body.kmavion;
    
    var factor_emision = 2
    var huella_transporte = kmauto*factor_emision + kmcamioneta +kmmoto+kmcombi+kmtransportepublico+kmbus+kmavion
    
    try{
        huella = req.session.user
        huella.huella_transporte=huella_transporte
        await transporteModel.findByIdAndUpdate(huella._id, huella)
       if(tipo == "mixto"){
            res.redirect("/transporteinsumos/mixto")
        }else{
            res.redirect("/transporteinsumos/presencial")
        }
        
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})




module.exports = router;
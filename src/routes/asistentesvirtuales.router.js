const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")



router.post("/:id", async(req,res)=>{
    var tipo = req.params.id
    console.log(tipo)
    var Alemania = req.body.alemania
    var Argentina = req.body.argentina
    var Belgica = req.body.belgica
    var Brasil = req.body.brasil
    var Chile = req.body.chile
    var Colombia = req.body.colombia
    var Costa_Rica = req.body.costa_rica
    var Eslovenia = req.body.eslovenia
    var Espana = req.body.espana
    var Estados_Unidos = req.body.usa
    var Francia = req.body.francia
    var Inglaterra = req.body.inglaterra 
    var Italia = req.body.italia
    var Mexico = req.body.mexico
    var Peru = req.body.peru
    var Polonia = req.body.polonia
    var Republica_Checa = req.body.republica_checa
    var Uruguay = req.body.uruguay


    
    var factor_emision = 2

    var huella_asistentes_virtuales = Alemania+Argentina+Belgica+Brasil+Chile+Colombia+Costa_Rica+Eslovenia+Espana+Estados_Unidos+Francia+Inglaterra+Italia+Mexico+Peru+Polonia+Republica_Checa+Uruguay*factor_emision
    
    
    try{
        huella = req.session.user
        huella.huella_asistentes_virtuales=huella_asistentes_virtuales
        await transporteModel.findByIdAndUpdate(huella._id, huella)
        if(tipo == "mixto"){
            res.redirect("/transporte/mixto")
        }else{
            res.redirect("/huellacargada/virtual")
        }
        
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})




module.exports = router;
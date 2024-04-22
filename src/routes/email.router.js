const express = require("express")
const router = express.Router()
const transporteModel = require("../models/transporte.models.js")




router.post("/", async(req,res)=>{

    var email = req.body.mail;

    try{
        

        const newHuella = await transporteModel.create({
            nombre_evento: null,
            email: email,
            empresa: null,
            pais: null,
            industria: null,
            horas: 0,
            participantes: 0,
            huella_participantes_virtuales: 0,
            huella_transporte: 0,
            huella_transporte_insumos: 0,
            huella_alojamiento: 0,
            huella_energia: 0,
            huella_combustibles: 0,
            huella_equipos: 0,
            huella_comida: 0,
            huella_residuos: 0,
            huella: 0,
            huella_asistentes_virtuales: 0
        })
        req.session.login = true  
        req.session.user = {...newHuella._doc}
        

        res.redirect("/")
    } catch(error) {
        res.status(400).send({error: "error al cargar la huella", error})
    }
})




module.exports = router;
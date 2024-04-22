const express = require("express")
const router = express.Router()


router.get("/email", (req,res)=>{
    res.render("email")
})
router.get("/", (req,res)=>{
    res.render("index")
})
router.get("/transporte/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        console.log(tipo)
        res.render("transporte",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("transporte",{mixto: mixto, tipo:tipo})
    }
    

})
router.get("/transporteinsumos/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("transportedeinsumos",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("transportedeinsumos",{mixto: mixto, tipo:tipo})
    }
    
})
router.get("/alojamiento/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("alojamiento",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("alojamiento",{mixto: mixto, tipo:tipo})
    }
})
router.get("/energia/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("energia",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("energia",{mixto: mixto, tipo:tipo})
    }
    
})
router.get("/combustibles/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("combustibles",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("combustibles",{mixto: mixto, tipo:tipo})
    }
})

router.get("/equipos/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("equipos",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("equipos",{mixto: mixto, tipo:tipo})
    }
})
router.get("/comida/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("comida",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("comida",{mixto: mixto, tipo:tipo})
    }
})
router.get("/residuos/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("residuos",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("residuos",{mixto: mixto, tipo:tipo})
    }
})
router.get("/huellacargada/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("huellacargada",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("huellacargada",{mixto: mixto, tipo:tipo})
    }
})
router.get("/tipo", (req,res)=>{
    res.render("tipo")
})

router.get("/asistentesvirtuales/:id", (req,res)=>{
    var tipo = req.params.id
    if(tipo== "mixto"){
        mixto = true
        
        res.render("asistentesvirtuales",{mixto: mixto, tipo:tipo})
    }else{
        mixto = false
        res.render("asistentesvirtuales",{mixto: mixto, tipo:tipo})
    }
  
})  
router.get("/asistentesvirtualesmixtos", (req,res)=>{
    res.render("asistentesvirtualesmixtos")
})

module.exports= router
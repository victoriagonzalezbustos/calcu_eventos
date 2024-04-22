const mongoose = require("mongoose")
const transporteCollection = "transporte"

const transporteSchema = new mongoose.Schema({
    nombre_evento: String,
    email: String,
    empresa: String,
    pais: String,
    industria: String,
    horas: Number,
    participantes: Number,
    huella_participantes_virtuales: Number,
    huella_transporte: Number,
    huella_transporte_insumos: Number,
    huella_alojamiento: Number,
    huella_energia: Number,
    huella_combustibles: Number,
    huella_equipos: Number,
    huella_comida: Number,
    huella_residuos: Number,
    huella: Number,
    huella_asistentes_virtuales: Number

})


const transporteModel = mongoose.model(transporteCollection, transporteSchema)

module.exports = transporteModel
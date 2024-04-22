
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const session = require("express-session")
const MongoStore = require("connect-mongo")


const exphdbs = require("express-handlebars")
app.engine("handlebars", exphdbs.engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

const transporteRouter = require("./routes/transporte.router.js")
const viewsRouter = require("./routes/views.router.js")
const inicioRouter = require("./routes/inicio.router.js")
const transporteDeInsumosRouter = require("./routes/transportedeinsumos.router.js")
const alojamientoRouter = require("./routes/alojamiento.router.js")
const energiaRouter = require("./routes/energia.router.js")
const combustibleRouter = require("./routes/combustibles.router.js")
const equiposRouter = require("./routes/equipos.router.js")
const comidaRouter = require("./routes/comida.router.js")
const residuosRouter = require("./routes/residuos.router.js")
const emailRouter = require("./routes/email.router.js")
const asistentesvirtualesRouter =require("./routes/asistentesvirtuales.router.js")
const asistentesvirtualesmixtosRouter =require("./routes/asistentesvirtualesmixtos.router.js")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("./src/public"))
app.use(cookieParser())
app.use(session({
    secret:"secretCoder",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://victoriagonzalezbustos:39467217@eventos.o0i7dnb.mongodb.net/eventos?retryWrites=true&w=majority&appName=Eventos",
        ttl: 1000000000
    })
}))

//rutas
app.use("/api/email", emailRouter)
app.use("/api/inicio", inicioRouter)
app.use("/api/transporte", transporteRouter)
app.use("/api/transportedeinsumos", transporteDeInsumosRouter)
app.use("/api/alojamiento", alojamientoRouter)
app.use("/api/energia", energiaRouter)
app.use("/api/combustibles", combustibleRouter)
app.use("/api/equipos", equiposRouter)
app.use("/api/comida", comidaRouter)
app.use("/api/residuos", residuosRouter)
app.use("/api/asistentesvirtuales", asistentesvirtualesRouter)
app.use("/api/asistentesvirtualesmixtos", asistentesvirtualesmixtosRouter)

app.use("/", viewsRouter)




//bbdd


const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://victoriagonzalezbustos:39467217@eventos.o0i7dnb.mongodb.net/eventos?retryWrites=true&w=majority&appName=Eventos")
   .then(()=> console.log("conectados"))
    .catch((error)=> console.log(error))


//listening

app.listen(8080,()=> {
    console.log("escuchando")
})

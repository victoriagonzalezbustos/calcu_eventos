
class Transporte{
   
    async calcularHuellaTransporte(km){
        try {
            huella = km*2
        }catch(error){
            console.error("error", error)
        }
    }
}
const fnValidarMes = (texto) =>

    {
        let elMesEsValido = false;
        switch (elMesEsValido) {
            case "ENERO":
                {
                    elMesEsValido = true;
                    break;
                }
            case "FEBRERO":
                {
                    elMesEsValido = true;
                    break;
                }
            case "MARZO":
                {
                    elMesEsValido = true;
                    break;
                }
            default:
                {
                    elMesEsValido = true;
                    break;
                }



        }


    }
window.addEventListener("load", () => {
    console.log("esto esta funcionando");
    let textoDelMes = "marzo";
    let resultado = fnValidarMes(textoDelMes.toLocaleUpperCase)

    if (resultado) {
        console.log("el mes corresponde a un mes del calenmdario");

    } else {
        console.log("el mes ungresado NO corresponde a  un mes del calendario");

    }

})
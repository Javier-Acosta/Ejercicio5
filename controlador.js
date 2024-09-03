// EN ESTE SWITCH VERIFICA SI EL MES DEL AÑO INGRESADO ES VÁLIDO


const fnValidarMes = (texto) =>

    {
        let elMesEsValido = false;
        switch (texto) {
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
            case "ABRIL":
                {
                    elMesEsValido = true;
                    break;
                }
            case "MAYO":
                {
                    elMesEsValido = true;
                    break;
                }
            case "JUNIO":
                {
                    elMesEsValido = true;
                    break;
                }
            case "JULIO":
                {
                    elMesEsValido = true;
                    break;
                }
            case "AGOSTO":
                {
                    elMesEsValido = true;
                    break;
                }
            case "SEPTIEMBRE":
                {
                    elMesEsValido = true;
                    break;
                }
            case "OCTUBRE":
                {
                    elMesEsValido = true;
                    break;
                }
            case "NOVIEMBRE":
                {
                    elMesEsValido = true;
                    break;
                }
            case "DICIEMBRE":
                {
                    elMesEsValido = true;
                    break;
                }
            default:
                {
                    elMesEsValido = false;
                    break;
                }



        }

        return elMesEsValido;
    }
window.addEventListener("load", () => {

    console.log("esto esta funcionando");
    const idMes = document.querySelector("#idMes");
    // const idMes2 = document.querySelector("#idMes2");
    // const idMes3 = document.querySelector("#idMes3");
//   console.log(idMes1);

    idBtnValidarMes.addEventListener("click",()=>{
        console.log(idBtnValidarMes);
        
        console.log(idMes.value);
        

        // convertir a numero
        // let idMes1 = Number (idMes1.value);
    })

    let textoDelMes = idMes.value;
    // let resultado = fnValidarMes(textoDelMes.toLocaleUpperCase())
    

    if (textoDelMes) {
        
        console.log(`el mes corresponde a un mes del calenmdario ${textoDelMes}`);
        

    } else {
        console.log(`el mes corresponde a un mes del calenmdario ${textoDelMes}`);

    }
    
})
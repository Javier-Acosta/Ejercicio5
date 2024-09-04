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


    // const idMes = document.querySelector("#idMes");
    // console.log(resultado);

    const idResultadoMes = document.querySelector("#idResultadoMes");
    const idResultado = document.querySelector("#idResultado");

    // console.log(idResultadoMes);
    // console.log(idResultado);

    idBtnValidarMes.addEventListener("click", () => {
        const mes = document.querySelector("#idMes");

        const resultado = fnValidarMes(mes.value.toLocaleUpperCase());
        // console.log(idBtnValidarMes);
        // console.log(idResultadoMes);





        const mess = resultado;
        console.log(mess);




        if (resultado) {

            idResultadoMes.textContent = `El dato ingresado ${idMes.value} corresponde a un nombre del mes válido`;


        } else {
            idResultadoMes.textContent = `El dato ingresado ${idMes.value}  NO  corresponde a un nombre del mes válido`;


        }
    })







})
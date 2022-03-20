let divObjetivo;
let divs = ["cuentaJoven","cuentaNomina","cuentaNegocios","cuentaPagos"];


function showInfo(cuenta) {
    switch (cuenta)
    {
        case cuentaJoven:
                    divObjetivo = document.getElementById("cuentaJoven");
                    break;
        case cuentaNomina:
                    divObjetivo = document.getElementById("cuentaNomina");
                    break;
        case cuentaNegocios:
                    divObjetivo = document.getElementById("cuentaNegocios");
                    break;
        case cuentaPagos:
                    divObjetivo = document.getElementById("cuentaPagos");
                    break;
        default:
            break;
    }

    if (divObjetivo.style.display === "none"){
        for (let i=0;i<divs.length;i++){
            divAEsconder = document.getElementById(divs[i]);
            divAEsconder.style.display = "none"; //Se esconde
        }
        divObjetivo.style.display = "block"; //Se muestra
    } else {
        divObjetivo.style.display = "none"; //Se esconde si estaba mostrado
    }
}


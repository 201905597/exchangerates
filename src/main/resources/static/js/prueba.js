//Nombre del usuario
var name;
var bitcoin;
var id;
var div;

function validarYcalcular(){
    //Evito que recargue la página
    event.preventDefault();

    let todoOK = true;
    //Expresión regular para DNI
    var dniREGEX = /^[0-9]{8}[A-Z]$/;

    //Valores introducidos en el form
    let nombre = document.forms["btcForm"]["name"].value;
    //let nombre = document.getElementById("name");
    let dni = document.forms["btcForm"]["dni"].value;
    let cantidad =  document.forms["btcForm"]["cantidad"].value;

    //Validaciones
    var dniIntro = dniREGEX.test(dni);

    if ((nombre == "") || (dni == "")){
        alert("Por favor, rellena todos los campos");
        todoOK = false;
    }
    if (dniIntro == false){
        alert("El formato del DNI no es válido");
        todoOK = false;
    }
    if (isNaN(cantidad)){
        alert("La cantidad de moneda debe ser un número");
        todoOK = false;
    }

    //Llamada a mostrar datos
    if (todoOK){
        mostrarDatos();
    }
}


async function mostrarDatos(){
    //Evito que recargue la página
    event.preventDefault();

    name = document.getElementById("name");
    //Cantidad de Bitcoin que se quiere cambiar
    bitcoin = document.getElementById("cantidad").value;
    //Selección de la moneda de la que se quiere info
    id = (document.querySelector(".moneda")).value;
    id = id.toString();
    //Div en el que se va a mostrar la info
    div = document.getElementById("mostrar");


    let res = await fetch("/exchange",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
    }});

    if (res.status == 200){
            const data = await res.json();
            const content = data[0];
            const rates = JSON.parse(content);
            const ratesContent = rates["rates"];
            const contentId = ratesContent[id];

            //Edito el HTML
            let nombre = contentId["name"];
            let valor = contentId["value"]; //Valor de 1 Bitcoin en esa moneda
            //console.log(typeof valor); //number
            //console.log(valor);
            console.log(typeof bitcoin);
            console.log(bitcoin);
            let unidad = contentId["unit"]; //Nomenclatura de la moneda (BTC, ETH...)
            let tipo = contentId["type"]; //Tipo de moneda: crypto, commodity, fiat...
            let cambio = (bitcoin * valor).toFixed(2);
            div.style.display="block";
            div.innerHTML = "<p>La cantidad de Bitcoin introducida equivale a " + cambio + " " + nombre + " (" + unidad + ", " + tipo + ")." + "</p>";


        }else{
            div.style.display = "block";
            div.innerHTML = "<p>¡Vaya! No hemos podido resolver tu petición. </p>"
        }
    }




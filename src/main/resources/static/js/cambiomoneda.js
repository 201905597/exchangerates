// Se incluye la API de cambio de moneda
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// Variables de control
var cantidadinicial = document.querySelector(".inicial");
var convertir = document.querySelector(".convertir"); // botón de convertir
var deX = document.querySelector(".de");
var aX = document.querySelector(".a");
var resultado = document.querySelector(".resultado");
var valorFinal = document.getElementById("valorfinal");
var resultadoDe;
var resultadoA;
var valorAConvertir;

// Evento para cuando cambia la selección de moneda origen (de X)
deX.addEventListener('change', (event) => {
    resultadoDe = `${event.target.value}`;
    console.log(resultadoDe);
});

// Evento para cuando cambia la selección de moneda destino (a X)
aX.addEventListener('change', (event) => {
    resultadoA = `${event.target.value}`;
});

cantidadinicial.addEventListener('input', actualizarValor);

// Función para actualizar un valor
function actualizarValor(e) {
    valorAConvertir = e.target.value;
}

// Cuando el usuario haga click, se llama a la función getResultados
convertir.addEventListener("click", getResultados);

// Función lee y devuelve el contenido de la API
function getResultados() {
    fetch(`${api}`)
        .then(cambiosdemoneda => {
         //console.log(cambiosdemoneda);
         if (cambiosdemoneda.status === 404) {
            alert("Error 404. Vuelva más tarde.");
            return 404;
         }
         else
         {
            return cambiosdemoneda.json();
         }
    }).then(mostrarResultados);

}


// Mostrar el resultado de la conversión
function mostrarResultados(cambiosdemoneda) {
    if (cambiosdemoneda == 404)
    {
        resultado.innerHTML = "";
    }
    else
    {
        let ori = cambiosdemoneda.rates[resultadoDe];
        let dest = cambiosdemoneda.rates[resultadoA];
        if (resultadoDe == undefined || resultadoA == undefined){
            alert("Por favor, elija una moneda de origen y una de destino");
        }
        else
        {
            //Mostrar spinner, esperar, esconder spinner
            //resultado.innerHTML = '<div class="spinner-border text-primary"></div>';
            setTimeout(function(){resultado.innerHTML = ((dest / ori) * valorAConvertir).toFixed(3);},2000);
            resultado.innerHTML = '<div class="spinner-border text-primary"></div>';
        }
    }

}

// Si el usuario le da a "restablecer"
function restablecer() {
    window.location.reload();
    document.getElementsByClassName("inicial").innerHTML = "";
    document.getElementsByClassName("resultado").innerHTML = "";
};
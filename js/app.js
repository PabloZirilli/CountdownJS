// Armo el html
document.getElementById("title").innerHTML = "<h6> CounterJS</h6>";
document.getElementById("countdown").className = "eleven columns text-center box";

// Creo divs para separar la informacion
let days = document.createElement("div");
days.setAttribute("id","days");
days.className = "eleven columns text-center box_day";
let timer = document.createElement("div");
timer.setAttribute("id","timer");
timer.className = "eleven columns text-center box_timer";


// Agrego los divs nuevos al dom
document.querySelector("#countdown").appendChild(days);
document.querySelector("#countdown").appendChild(timer);

// Creo una variable de fecha futura
let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();


// Creo una funcion integrada en la varible tiempo
let tiempo = setInterval(function() {
    let now = new Date().getTime();
    let diference = countDownDate - now;

    // Realizo los calculos
    let dias = Math.floor(diference / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diference % (1000 * 60 * 60 *24)) / (1000 * 60 *60));
    let minutos = Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60 ));
    let segundos = Math.floor((diference % (1000 * 60)) / 1000 );

    min = checkTime(minutos);
    sec = checkTime(segundos);
    
    document.getElementById("days").innerHTML = "<h5>" + dias + " Dias " + " para el proximo año</h5>";
    document.getElementById("timer").innerHTML = "<h1>" + horas + ":" + min + ":" + sec + "</h1>";
}, 1000);

function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



// Coleta dos elementos
btn_yenne = document.querySelectorAll(".moeda-yenne")
btn_real = document.querySelectorAll(".moeda-real")
btn_dollar = document.querySelectorAll(".moeda-dollar")

moeda_origem = document.querySelector("#moedas-origem")
moeda_destino = document.querySelector("#moedas-destino")

btn_converter = document.querySelector("#btn-converter")
valor_origem = document.querySelector("#valor-origem")
valor_destino = document.querySelector("#valor-destino")

// Escolher a moeda de origem e destino
for (let index = 0; index < btn_yenne.length; index++) {
    btn_yenne[index].addEventListener("click", change_currency)
    btn_yenne.myParam = index+"YENNE"
}

for (let index = 0; index < btn_yenne.length; index++) {
    btn_real[index].addEventListener("click", change_currency)
    btn_real.myParam = index+"REAL"
}
for (let index = 0; index < btn_yenne.length; index++) {
    btn_dollar[index].addEventListener("click", change_currency)
    btn_dollar.myParam = index+"DOLLAR"
}



// Cambio
let cambio = {
    "DOLLAR": 0.182481,
    "YENNE": 23.91,
    "REAL": 1
}

// CHANGE ON DEMAND
valor_origem.addEventListener('keyup', update)

// Adding the currencies
// <li><button class="dropdown-item moeda-real">REAL</button></li>

let target = document.querySelector(".menu-currency")
let moedas_classes = ["moeda-real", "moeda-yenne", "moeda-dollar"]
for (let index = 0; index < 3; index++) {
    let elem = document.createElement('li')
    elem.innerHTML = "<button class='dropdown-item " + moedas_classes[index] + "'>"+
                moedas_classes[index].slice(6).toUpperCase() + "</button>"
    target.appendChild(elem)
}

// functions
// Changing Currency
function change_currency(evt){
    update()
    console.log("change_currency")
    let evento = evt.currentTarget
    let moeda = evento.myParam.slice(1)
    let index = evt.currentTarget.myParam.slice(0,1)
    if (index == 0) {
        moeda_origem.textContent = moeda
    } else {
        moeda_destino.textContent = moeda
    }
}

function update(){

    let valor_origem_float = parseFloat(valor_origem.value)

    if (valor_origem != NaN) {
        valor_destino.value = 
        ((valor_origem_float / cambio[moeda_origem.textContent]) * cambio[moeda_destino.textContent]).toFixed(2)
    }
}

// <li><button class="dropdown-item moeda-real">REAL</button></li>
//                         <li><button class="dropdown-item moeda-dollar">DOLLAR</button></li>
//                         <li><button class="dropdown-item moeda-yenne">YENNE</button></li>

// Converter
// btn_converter.addEventListener("click", ()=> {
//     let valor_origem = parseFloat(valor_origem_text.value)
    
//     if (valor_origem != NaN){
//         valor_destino.value = ((valor_origem/cambio[moeda_origem.textContent]) * cambio[moeda_destino.textContent]).toFixed(2)
//     }

// })


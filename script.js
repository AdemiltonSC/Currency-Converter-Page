// Coleta dos elementos
btn_yenne = document.querySelectorAll(".moeda-yenne")
btn_real = document.querySelectorAll(".moeda-real")
btn_dollar = document.querySelectorAll(".moeda-dollar")

moeda_origem = document.querySelector("#moedas-origem")
moeda_destino = document.querySelector("#moedas-destino")

btn_converter = document.querySelector("#btn-converter")
valor_origem_text = document.querySelector("#valor-origem")
valor_destino = document.querySelector("#valor-destino")

// Escolher a moeda de origem e destino
for (let index = 0; index < btn_yenne.length; index++) {
    btn_yenne[index].addEventListener("click", () => {
        if (index == 0){
            moeda_origem.textContent = "YENNE"
        }else{
            moeda_destino.textContent = "YENNE"
        }
    })
}
for (let index = 0; index < btn_yenne.length; index++) {
    btn_real[index].addEventListener("click", () => {
        if (index == 0) {
            moeda_origem.textContent = "REAL"
        } else {
            moeda_destino.textContent = "REAL"
        }
    })
}
for (let index = 0; index < btn_yenne.length; index++) {
    btn_dollar[index].addEventListener("click", () => {
        if (index == 0) {
            moeda_origem.textContent = "DOLLAR"
        } else {
            moeda_destino.textContent = "DOLLAR"
        }
    })
}

// Cambio
let cambio = {
    "DOLLAR": 0.182481,
    "YENNE": 23.91,
    "REAL": 1
}
// Converter
btn_converter.addEventListener("click", ()=> {
    let valor_origem = parseFloat(valor_origem_text.value)
    
    if (valor_origem != NaN){
        valor_destino.value = ((valor_origem/cambio[moeda_origem.textContent]) * cambio[moeda_destino.textContent]).toFixed(2)
    }

})


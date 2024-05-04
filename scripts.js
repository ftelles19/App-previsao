chave = "c6763a44140b6c813a02ac3b60a51e25"

function mostrarInfos(dados){
    console.log(dados)

    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".air-humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
    .then(resposta => resposta.json())

    mostrarInfos(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}
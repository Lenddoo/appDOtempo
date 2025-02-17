function fnCarregarDados(cidade){
    
cidade = fnFormatar(cidade)

    //const url = "https://goweather.herokuapp.com/weather/"+ cidade
    const url = "dados.json"
    console.log(url)
    fetch(url)
        .then(resposta =>{
            return resposta.json()
        })
        .then(dados =>{
            fnMostrarDados(dados.temperature, dados.wind, dados.description)
        })
}
function fnMostrarDados(temperatura, vento, condicao){
    document.getElementById("temperatura").innerHTML = temperatura
    document.getElementById("vento").innerHTML = vento
    


    if(condicao == "Partly cloudy"){
        document.getElementById("icone").innerHTML = condicao ="<i class='bi bi-cloud-sun cinza'></i>";
        document.getElementById("cartao").classList.add("nublado")
    }else if(condicao == "Sunny"){
        document.getElementById("icone").innerHTML = condicao ="<i class='bi bi-brightness-high amarelo'></i>";
        document.getElementById("cartao").classList.add("sol")
    }else if(condicao == "Light rain"){
        document.getElementById("icone").innerHTML = condicao ="<i class='bi bi-cloud-drizzle azul'></i>";
        document.getElementById("cartao").classList.add("chuva-leve")
    }else if(condicao == "Heavy rain"){
        document.getElementById("icone").innerHTML = condicao ="<i class='bi bi-cloud-rain-heavy azul-forte'></i>"
        document.getElementById("cartao").classList.add("chuva-leve")
    }else if(condicao == "Thunderstorm"){
        document.getElementById("icone").innerHTML = condicao ="<i class='bi bi-cloud-lightning'></i>"
        document.getElementById("cartao").classList.add("chuva-leve")
    }else if(condicao == "Snow"){
        document.getElementById("icone").innerHTML = condicao ="<i class='bi bi-cloud-snow cinza'></i>"
        document.getElementById("cartao").classList.add("nublado")
    }
}

let botao = document.getElementById("botao-carregar")
botao.addEventListener("click", function(){
    fnCarregarDados(document.getElementById("cidade").value)
    document.getElementById("cartao").style.display = "block"
    document.getElementById("espaco-botao").style.display = "none"

})
function fnFormatar(cidade){
    return cidade 
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "+")
}
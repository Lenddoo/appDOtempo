function fnCarregarDados(cidade){
    const url = "https://goweather.herokuapp.com/weather/"+ cidade
    console.log(url)
    fetch(url)
        .then(resposta =>{
            return resposta.json()
        })
        .then(dados =>{
            fnMostrarDados(dados.temperature, dados.wind)
        })
}
function fnMostrarDados(temperatura, vento){
    document.getElementById("temperatura").innerHTML = temperatura
    document.getElementById("vento").innerHTML = vento
}

let botao = document.getElementById("botao-carregar")
botao.addEventListener("click", function(){
    fnCarregarDados(document.getElementById("cidade").value)
})
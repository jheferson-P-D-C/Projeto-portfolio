const foto = document.querySelector(".foto")
const informacoes = document.querySelector(".informacoes")
function verfoto(){
    let divback = document.createAttribute("div")
    divback.style.backgroundColor = "black"
    divback.style.width = "100vw"
    divback.style.height = "100vh"
    informacoes.style.display = "none"
    foto.style.width = "100vw"
    foto.style.height = "100vh"
}
function deminuirfoto(){
    if(foto.style.width == "100vw"){
        informacoes.style.display = "block"
        foto.style.width = "200px"
        foto.style.height = "200px"
    }
}
foto.addEventListener("click", verfoto)

foto.addEventListener("mouseover", deminuirfoto)

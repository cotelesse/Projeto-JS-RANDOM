
const button = document.querySelector("button")

function gerarNumero() {

    const min = Math.ceil(document.querySelector(".minimo").value)
    const max = Math.floor(document.querySelector(".maximo").value)
    const result = Math.floor(Math.random() * ( max - min + 1)) + min;
    
    alert(result)
}


button.addEventListener("click", gerarNumero)
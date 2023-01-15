function calcular() {
    let valor = parseInt(document.getElementById('valor').value)
    let gorjeta = parseInt(document.getElementById('gorjeta').value)
    let pessoas = parseInt(document.getElementById('pessoas').value)
    let resultado = parseInt((valor * gorjeta)/100)

    if (pessoas === 1){ 
        resultado += valor
    } else{
        resultado = (valor + resultado)/pessoas
    }
    document.getElementById('aBa').value = 'R$' + resultado
}

 

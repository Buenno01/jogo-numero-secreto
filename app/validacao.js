function validacaoDoValor (chute){
    const numero = +chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (chuteForaDoIntervalo(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero===numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } 
    else if(numero>numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor<i class="fa-solid fa-arrow-down"></i></div>`;
    }
    else if(numero<numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior<i class="fa-solid fa-arrow-up"></i></div>`;
    }
}
console.log(numeroSecreto)
function chuteForaDoIntervalo(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
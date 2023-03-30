window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const elementoChute = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    console.log(e);
    chute = e.results[0][0].transcript;

    if(chute === "reset" ||chute === "resetar" ||chute === "jogar de novo" ||chute === "jogar novamente"){
        reset();
    }

    validacaoDoValor(chute)

    exibeChuteNaTela(chute)
}

function exibeChuteNaTela(e){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${e}</span>
    `
}

recognition.addEventListener('end', ()=>recognition.start())
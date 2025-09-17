const resposta = document.getElementById("resposta");
const anoAtual = new Date().getFullYear();
const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", (evento) => {
    evento.preventDefault();
    const inputAno = document.getElementById("ano");
    const nascimento = parseInt(inputAno.value);
    if (!isNaN(nascimento) && nascimento > 1900){
        resposta.innerText = "Sua idade é: " + (anoAtual - nascimento);
    } else {
        resposta.innerText = "Por favor, insira um ano válido."
    }
})
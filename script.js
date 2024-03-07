const ButtonLadoQuadrado = document.getElementById("ButtonLadoQuadrado");
const TextoLadoQuadrado = document.getElementById("TextoLadoQuadrado");

ButtonLadoQuadrado.onclick = function(){
    const LadoQuadrado = document.getElementById("LadoQuadrado").value;
    resultado = Math.pow(LadoQuadrado, 2);
    TextoLadoQuadrado.textContent = `A área do quadrado é ${resultado}`; 
}
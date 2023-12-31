function validaFormulario() {
let numberA = document.getElementById("campoA").value;
let numberB = document.getElementById("campoB").value;

const result = parseFloat(numberA) < parseFloat(numberB);

  if (result === true) {
    const mensagemValida =
      "Parabéns! O número de Campo B é maior que o número do Campo A";
    document.getElementById("result").innerHTML = mensagemValida;
  } else {
    const mensagemInvalida =
      "Sinto muito! O número de Campo B é menor que o número do Campo A";
    document.getElementById("result").innerHTML = mensagemInvalida;
    
  }
}


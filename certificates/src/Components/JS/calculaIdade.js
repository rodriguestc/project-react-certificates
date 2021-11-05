
function calculaIdade({ dia, mes, ano }) {
  let birthday = `${dia.value}, ${mes.value - 1}, ${ano.value}`;

  let dataAtual = new Date();
  let aniver = new Date(birthday);
  var idade = dataAtual.getFullYear() - aniver.getFullYear();
  let jaFez = dataAtual.getMonth() - aniver.getMonth();
  console.log(idade);
  if (jaFez >= 0 && (dataAtual.getDay() >= aniver.getDay()) && idade > 0 && idade < 100) {
    return idade;
  } else if (jaFez < 0 && (dataAtual.getDay() <= aniver.getDay()) && idade > 0 && idade < 100) {
    return idade--;
  } else {
    return 'Invalid Age';
  }
}

export { calculaIdade };
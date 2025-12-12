function atualizarContagem() {
  const natal = new Date("December 25, 2025 00:00:00").getTime();
  const agora = new Date().getTime();
  const diferenca = natal - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

  setTimeout(atualizarContagem, 1000);
}

atualizarContagem();

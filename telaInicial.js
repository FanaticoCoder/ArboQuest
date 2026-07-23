document.body.appendChild(buttonCredits);
document.body.appendChild(start);
document.body.appendChild(nameGame);

// INICIA TODO O EVENTO DE PERGUNTAS
start.addEventListener('touchend', () => {
  start.remove();
  buttonCredits.remove();
  nameGame.remove();
  clearInterval(timeGameNameAnimation);
  
  document.body.appendChild(player);
  document.body.appendChild(inimigo);
  
  // INICIA A TELA DE JOGO
  telaDeJogo();
  
  document.body.appendChild(legend);
});

buttonCredits.addEventListener('touchend', () => {
  document.body.appendChild(buttonBack);
  start.remove();
  buttonCredits.remove();
  nameGame.remove();
  clearInterval(timeGameNameAnimation);
})
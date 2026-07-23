// QUANDO O BOTÃO DE VOLTAR É CLICADO
buttonBack.addEventListener('touchend', () => {
  buttonBack.remove();
  
  document.body.appendChild(buttonCredits);
  document.body.appendChild(start);
  document.body.appendChild(nameGame);
  animationNameGame();
});
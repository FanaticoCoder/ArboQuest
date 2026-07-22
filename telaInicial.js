document.body.appendChild(buttonCredits);
document.body.appendChild(start);
document.body.appendChild(nameGame);

start.addEventListener('touchend', () => {
  start.remove();
  buttonCredits.remove();
  nameGame.remove();
  clearInterval(timeGameNameAnimation);
  
  document.body.appendChild(player);
  document.body.appendChild(inimigo);
  for (let i = 0; i <= 3; i++) {
    let alter = document.createElement('div');
    alter.className = 'opcao';
    alterna.push(alter);
    document.body.appendChild(alter);
    
    alterna[i].style.left = alternaPosXePosY[0][i] + 'px';
    alterna[i].style.top = alternaPosXePosY[1][i] + 'px';
  };
  document.body.appendChild(legend);
});

buttonCredits.addEventListener('touchend', () => {
  document.body.appendChild(buttonBack);
  start.remove();
  buttonCredits.remove();
  nameGame.remove();
  clearInterval(timeGameNameAnimation);
})
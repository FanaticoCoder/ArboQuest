// TELA INICIAL

var button1 = document.createElement('div');
button1.className = 'button1';
document.body.appendChild(button1);
button1.textContent = 'PLAY'

opcoes = [];

button1.addEventListener('touchstart', () => {
  button1.remove();
});
button1.addEventListener('touchend', () => {
  var player = document.createElement('div');
  player.className = 'player';
  document.body.appendChild(player);
  
  var inimigo = document.createElement('div');
  inimigo.className = 'inimigo';
  document.body.appendChild(inimigo);
  
  for (let i = 0; i <= 3; i++) {
    var opcao = document.createElement('div');
    opcao.className = 'opcao';
    document.body.appendChild(opcao);
    opcoes.push(opcao);
  };
  
  opcoes[0].style.left = '100px';
  opcoes[0].style.top = '500px';
  
  opcoes[1].style.left = '500px';
  opcoes[1].style.top = '500px';
  
  opcoes[2].style.left = '100px';
  opcoes[2].style.top = '700px';
  
  opcoes[3].style.left = '500px';
  opcoes[3].style.top = '700px';
});
// TELA DE JOGO
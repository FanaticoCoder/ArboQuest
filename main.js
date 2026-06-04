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
  
  var legend = document.createElement('div');
  legend.className = 'legend';
  document.body.appendChild(legend);
  
  for (let i = 0; i <= 3; i++) {
    var opcao = document.createElement('div');
    opcao.className = 'opcao';
    document.body.appendChild(opcao);
    opcoes.push(opcao);
  };
  
  opcoes[0].style.left = '200px';
  opcoes[0].style.top = '700px';
  
  opcoes[1].style.left = '600px';
  opcoes[1].style.top = '700px';
  
  opcoes[2].style.left = '200px';
  opcoes[2].style.top = '900px';
  
  opcoes[3].style.left = '600px';
  opcoes[3].style.top = '900px';
});
// TELA DE JOGO
// TELA INICIAL

//cria os botoes iniciais start e creditos
  var start = document.createElement('div');
  var buttonCredits = document.createElement('div');
  
// torna visível os botões
function creatTelaInicial() {
  start.className = 'start';
  document.body.appendChild(start);
  
  buttonCredits.className = 'buttonCredits';
  document.body.appendChild(buttonCredits);
};
creatTelaInicial();

// atribui texto aos botões iniciais
buttonCredits.textContent = 'CREDITS';
start.textContent = 'PLAY';

start.addEventListener('touchstart', () => {
  
})
start.addEventListener('touchend', () => {
  start.remove();
  buttonCredits.remove();
})
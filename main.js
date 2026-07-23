// ORIGEM DOS BOTÕES

// START
window.start = document.createElement('div');
start.className = 'start';
start.textContent = 'PLAY';

// BOTÃO DE VOLTAR
window.buttonBack = document.createElement('div');
buttonBack.className = 'buttonBack';
buttonBack.textContent = 'BACK';

// BOTÃO DE CRÉDITOS
window.buttonCredits = document.createElement('div');
buttonCredits.className = 'buttonCredits';
buttonCredits.textContent = 'CREDITS';

// CRIA O NOME DO JOGO
window.nameGame = document.createElement('img');
nameGame.src = 'NameGame.png';
nameGame.className = 'nameGame';

// TIMER PRA A ANIMAÇÃO DO NOME DO JOGO
var timeGameNameAnimation;

// CRIA A ANIMAÇÃO DO NOME
function animationNameGame() {
  elementPosX = [5, 5.5, 6, 5.5, 5];
  let movePosX = 0;
  
  timeGameNameAnimation = setInterval(() => {
    movePosX += 1;
    nameGame.style.top = elementPosX[movePosX] + '%';
    
    if (movePosX === 4) {
      movePosX = -1;
    };
    
  }, 150);
};

// TORNA GLOBAL A FUNÇÃO DA ANIMAÇÃO DO NOME
window.animationNameGame = animationNameGame;
animationNameGame();

// CRIA O ELEMENTO PLAYER
window.player = document.createElement('div');
player.className = 'player';

// CRIA O ELEMENTO INIMIGO
window.inimigo = document.createElement('div');
inimigo.className = 'inimigo';

// ARRAY DOS DIVS
window.alterna = [];

// POSIÇÃO DOS DIVS NA TELA
window.alternaPosXePosY = [
  [225, 625, 225, 625],
  [700, 700, 900, 900]
];

// CRIA A PERGUNTA
window.legend = document.createElement('div');
legend.className = 'legend';

// IMPEDE O RELOAD DO NAVEGADOR
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "";
});
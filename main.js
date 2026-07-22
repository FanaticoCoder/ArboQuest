window.start = document.createElement('div');
start.className = 'start';
start.textContent = 'PLAY';

window.buttonBack = document.createElement('div');
buttonBack.className = 'buttonBack';
buttonBack.textContent = 'BACK';

window.buttonCredits = document.createElement('div');
buttonCredits.className = 'buttonCredits';
buttonCredits.textContent = 'CREDITS';

window.nameGame = document.createElement('img');
nameGame.src = 'NameGame.png';
nameGame.className = 'nameGame';
var timeGameNameAnimation; // timer pra a animação do nome do jogo

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

// TORNA A FUNCAO DE ANIMAÇÃO DO NOME GLOBAL
window.animationNameGame = animationNameGame;
animationNameGame();

window.player = document.createElement('div');
player.className = 'player';

window.inimigo = document.createElement('div');
inimigo.className = 'inimigo';

window.alterna = [];
window.alternaPosXePosY = [
  [225, 625, 225, 625],
  [700, 700, 900, 900]
];

window.legend = document.createElement('div');
legend.className = 'legend';

// IMPEDE O RELOAD DO NAVEGADOR
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "";
});
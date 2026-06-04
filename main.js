// TELA INICIAL
som = [];
for (let i = 0; i <= 2; i++) {
  let audio = document.createElement('audio');
  som.push(audio);
  som[i].volume = 0.1;
};
som[0].src = 'certo.wav';
som[1].src = 'errado.wav';

var quest = [
  [
    'QUADRADO?',
    ['CIRCULO', false],
    ['RETANGULO', false],
    ['TRIANGULO', false],
    ['QUADRADO', true]
  ],
  [
    'BOLA?',
    ['ESFERA', false],
    ['REDONDO', false],
    ['BOLA', true],
    ['PEDRA?', false]
  ],
  [
    'CASA?',
    ['CASA', true],
    ['PREDIO', false],
    ['GARAGEM', false],
    ['CHACARA', false]
  ],
  [
    'PEIXE?',
    ['CAVALO', false],
    ['PEIXE', true],
    ['COELHO', false],
    ['PASSARO', false]
  ],
  [
    'POSSO?',
    ['NAO', false],
    ['SIM', false],
    ['PODE', true],
    ['talvez', false]
  ]
];

console.log(quest[0][0], quest[0][2]);
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
  
  opcoes[0].style.left = '225px';
  opcoes[0].style.top = '700px';
  
  opcoes[1].style.left = '625px';
  opcoes[1].style.top = '700px';
  
  opcoes[2].style.left = '225px';
  opcoes[2].style.top = '900px';
  
  opcoes[3].style.left = '625px';
  opcoes[3].style.top = '900px';
  
  let sort = Math.floor(Math.random() * 4);
  let timeQuest;
  let timeOpcao;
  for (let i = 0; i < opcoes.length; i++) {
    let bug = true;
    legend.textContent = quest[sort][0];
    opcoes[i].textContent = quest[sort][i + 1][0];
    opcoes[i].dataset.correct = quest[sort][i + 1][1];
    
    opcoes[i].addEventListener('touchstart', () => {
      if (opcoes[i].dataset.correct === 'true') {
        som[0].currentTime = 0;
        som[0].play();
      }
      else {
        som[1].currentTime = 0;
        som[1].play();
        timeQuest = setInterval(() => {
          if (bug) {
            legend.textContent = quest[sort][0];
          } else {
            legend.textContent = '';
          }
          bug = !bug;
        }, 100)
        timeOpcao = setInterval(() => {
          if (bug) {
            opcoes[i].textContent = quest[sort][i + 1][0]
          } else {
            opcoes[i].textContent = ''
          };
          setTimeout(() => {
            clearInterval(timeQuest);
            clearInterval(timeOpcao);
          }, 500)
        }, 100)
      }
    })
  }
});

// TELA DE JOGO
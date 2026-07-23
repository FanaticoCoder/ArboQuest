window.quest = [
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
    ['TALVEZ', false]
  ]
];

window.questSort = Math.floor(Math.random() * quest.length);

function telaDeJogo() {
  for (let i = 0; i <= 3; i++) {
    
    // CRIA CADA DIV QUE VAI TER UMA RESPOSTA
    let alter = document.createElement('div');
    alter.className = 'opcao';
    alterna.push(alter);
    document.body.appendChild(alter);
    
    // POSICIONA OS DIVS QUE TEM AS RESPOSTAS
    alterna[i].style.left = alternaPosXePosY[0][i] + 'px';
    alterna[i].style.top = alternaPosXePosY[1][i] + 'px';
    
    // ESCREVE A PERGUNTA
    setTimeout(() => {
      legend.textContent = quest[questSort][0];
    }, 300 * (i + 1));
    
    // ESCREVE AS RESPOSTAS
    setTimeout(() => {
      alterna[i].textContent = quest[questSort][i + 1][0];
    }, 700 * (i + 1));
    
    // BOTÃO PRA INTERAGIR COM CADA DIV DE RESPOSTA
    alterna[i].addEventListener('touchend', () => {
      
      // SO SE PODE INTERAGIR SE O ÚLTIMO DIV RECEBER UMA RESPOSTA
      if (alterna[3].textContent !== '') {
        
      };
    });
  };
};
// TELA INICIAL

var button1 = document.createElement('div');
button1.className = 'button1';
document.body.appendChild(button1);
button1.textContent = 'PLAY'

button1.addEventListener('touchstart', ()=>{
  button1.remove();
});
// TELA DE JOGO


document.body.appendChild(buttonCredits);
document.body.appendChild(start);
document.body.appendChild(nameGame);

start.addEventListener('touchend', () => {
  start.remove();
  buttonCredits.remove();
  nameGame.remove();
});

buttonCredits.addEventListener('touchend', () => {
  document.body.appendChild(buttonBack);
  start.remove();
  buttonCredits.remove();
  nameGame.remove();
})
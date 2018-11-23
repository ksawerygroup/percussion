document.addEventListener('keydown', (e) => {
  let music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!music) return;
  music.currentTime = 0; // opóźnienie klawisza przy zero brak
  music.play();
  let color = document.querySelector(`.keys div[data-key="${e.keyCode}"]`);
  // console.log(color);
  color.classList.add('playing');
})
document.addEventListener('keyup', (e) => {
  let color = document.querySelector(`.keys div[data-key="${e.keyCode}"]`);
  if (!color) return;
  color.classList.remove('playing');
})
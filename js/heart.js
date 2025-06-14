
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";
  coracao.textContent = ["💖","💘","💝","💞","❤️"][Math.floor(Math.random() * 5)];
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 5000);
}
setInterval(criarCoracao, 300);

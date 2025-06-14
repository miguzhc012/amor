window.addEventListener('DOMContentLoaded', () => {
  const musica = document.getElementById("musica");

  // Autoplay ativado com som após desbloqueio automático
  musica.muted = false;
  const playPromise = musica.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.warn("Autoplay bloqueado. O usuário precisa interagir para ativar o som.");
    });
  }
});
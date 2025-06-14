
const inicioRelacionamento = new Date("2025-05-29T19:17:00");
function atualizarContador() {
  const agora = new Date();
  let anos = agora.getFullYear() - inicioRelacionamento.getFullYear();
  let meses = agora.getMonth() - inicioRelacionamento.getMonth();
  let dias = agora.getDate() - inicioRelacionamento.getDate();
  let horas = agora.getHours() - inicioRelacionamento.getHours();
  let minutos = agora.getMinutes() - inicioRelacionamento.getMinutes();
  let segundos = agora.getSeconds() - inicioRelacionamento.getSeconds();
  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0) { minutos += 60; horas--; }
  if (horas < 0) { horas += 24; dias--; }
  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }
  if (meses < 0) { meses += 12; anos--; }
  document.getElementById("contador").textContent = 
    `${anos} anos, ${meses} meses, ${dias} dias, ` +
    `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

function actualizarReloj() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
 
    var reloj = document.getElementById("Reloj");
    reloj.style.setProperty("--segundos", segundos);
    reloj.style.setProperty("--minutos", minutos);
    reloj.style.setProperty("--horas", horas);
 
    setTimeout(actualizarReloj, 1000);
}
 
actualizarReloj();
  
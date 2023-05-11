//RETORNANDO A HORA
let horas = new Date()
document.write(horas.getHours());
document.write("<br><br>");
//RETORNO OS MINUTOS
let minutos = new Date()
document.write(minutos.getMinutes());
document.write("<br><br>");
//RETOENANDO OS SEGUNDOS
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>");

//SETANDO A HORA

let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours());
document.write("<br><br>");

document.write(horas1.toLocaleString());

//USANDO setTimeout
function BemVindo(){
    alert("Ola tudo bem")
}  
  
setTimeout
setInterval







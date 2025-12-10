// ÁUDIO PÁGINA 2
const audio = new Audio("assets/musica.mp3");
audio.volume = 1.0;

// ABRIR PÁGINA 2
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

document.getElementById("openCard").addEventListener("click", () => {
  page1.classList.remove("active");
  setTimeout(() => {
    page2.classList.add("active");
    audio.play().catch(()=>{});
  }, 400);
});

// BOTÕES
function openMaps(){
  window.open("https://www.google.com/maps?q=Vip+Festas+Porto+Alegre", "_blank");
}

function confirmarPresenca() {
  window.open("https://wa.me/5551992226662?text=Olá,%20confirmo%20minha%20presença%20no%20evento!", "_blank");
}

function openDress() {
  alert("Vestimenta: Esporte Fino");
}

function openPresentes() {
  document.getElementById("modal-presentes").classList.add("active");
}

function closePresentes() {
  document.getElementById("modal-presentes").classList.remove("active");
}

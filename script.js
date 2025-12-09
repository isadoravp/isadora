/* ÁUDIO DA PÁGINA 2 */
const audio = new Audio("assets/musica.mp3"); // coloque seu mp3 depois
audio.volume = 1.0;

/* ABRIR PÁGINA 2 */
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

document.getElementById("openCard").addEventListener("click", () => {
  page1.classList.remove("active");
  setTimeout(() => {
    page2.classList.add("active");
    audio.play().catch(()=>{});
  }, 400);
});

/* BOTÕES */
function openMaps() {
  window.open("https://maps.google.com", "_blank");
}

function confirmarPresenca() {
  window.open("https://wa.me/", "_blank");
}

function openDress() {
  alert("Vestimenta: Traje Social / Gala");
}

function openPresentes() {
  document.getElementById("modal-presentes").classList.add("active");
}

function closePresentes() {
  document.getElementById("modal-presentes").classList.remove("active");
}

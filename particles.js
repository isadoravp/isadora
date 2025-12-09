/* =============================
   PARTICULAS DA PÁGINA 1
============================= */
const page1 = document.querySelector('.page1');
for (let i = 0; i < 80; i++) {
  let particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = particle.style.height = `${Math.random()*3+2}px`;
  particle.style.left = `${Math.random()*100}%`;
  particle.style.top = `${Math.random()*100}%`;
  particle.style.animationDuration = `${Math.random()*3+2}s`;
  page1.appendChild(particle);
}

/* =============================
   ESTRELAS DA PÁGINA 2
============================= */
const page2 = document.querySelector('.page2');
for (let i = 0; i < 100; i++) {
  let star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random()*100}%`;
  star.style.top = `${Math.random()*100}%`;
  star.style.width = star.style.height = `${Math.random()*2+1}px`;
  star.style.animationDuration = `${Math.random()*3+1}s`;
  page2.appendChild(star);
}

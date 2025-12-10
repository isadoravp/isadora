/* PARTICULAS PÁGINA 1 */
const page1Container = document.querySelector('.page1');
page1Container.style.position = 'relative'; // garante posicionamento absoluto das partículas

for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = particle.style.height = `${Math.random()*3+1}px`;
  particle.style.left = `${Math.random()*100}%`;
  particle.style.top = `${Math.random()*100}%`;
  particle.style.position = 'absolute';
  particle.style.background = '#fff';
  particle.style.borderRadius = '50%';
  particle.style.opacity = 0.8;
  particle.style.animation = `sparkle ${Math.random()*3+2}s linear infinite`;
  page1Container.appendChild(particle);
}

/* ESTRELAS PÁGINA 2 */
const page2Container = document.querySelector('.page2');
page2Container.style.position = 'relative'; // garante posicionamento absoluto das estrelas

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random()*100}%`;
  star.style.top = `${Math.random()*100}%`;
  star.style.width = star.style.height = `${Math.random()*2+1}px`;
  star.style.position = 'absolute';
  star.style.background = '#fff';
  star.style.borderRadius = '50%';
  star.style.opacity = 0.8;
  star.style.animation = `twinkle ${Math.random()*3+1}s infinite alternate`;
  page2Container.appendChild(star);
}

/* =============================
   ESTRELAS PÁGINA 2
============================= */
const page2Container = document.querySelector('.page2');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random()*100}%`;
  star.style.top = `${Math.random()*100}%`;
  star.style.width = star.style.height = `${Math.random()*2+1}px`;
  star.style.animationDuration = `${Math.random()*3+1}s`;
  page2Container.appendChild(star);
}

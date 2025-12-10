/* =============================
   PARTICULAS PÁGINA 1
============================= */
const page1Container = document.querySelector('.page1');
for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = particle.style.height = `${Math.random()*3+2}px`;
  particle.style.left = `${Math.random()*100}%`;
  particle.style.top = `${Math.random()*100}%`;
  particle.style.position = 'absolute';
  particle.style.background = '#fff';
  particle.style.borderRadius = '50%';
  particle.style.opacity = 0.8;
  particle.style.animation = `sparkle ${Math.random()*3+2}s linear infinite`;
  page1Container.appendChild(particle);
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes sparkle {
  0%,100% { transform: translateY(0) scale(0.5); opacity:0.8; }
  50% { transform: translateY(-100px) scale(1.2); opacity:1; }
}

/* ESTRELAS PÁGINA 2 */
.page2 .star {
  position: absolute;
  background: #fff;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  opacity: 0.8;
  animation: twinkle 2s infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.2; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(0.5); }
}
`;
document.head.appendChild(style);

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

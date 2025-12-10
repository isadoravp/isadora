const page1Container = document.getElementById('page1');

for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 3 + 1; // 1px a 4px
  particle.style.width = particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.position = 'absolute';
  particle.style.background = '#fff';
  particle.style.borderRadius = '50%';
  particle.style.opacity = Math.random() * 0.5 + 0.5;
  particle.style.animation = `sparkle ${Math.random() * 3 + 2}s linear infinite`;
  page1Container.appendChild(particle);
}

/* =============================
   ESTRELAS PÁGINA 2
============================= */
const page2Container = document.querySelector('.convite-container'); // agora é o container da imagem

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2 + 1; // 1px a 3px
  star.style.width = star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.position = 'absolute';
  star.style.borderRadius = '50%';
  star.style.opacity = Math.random() * 0.5 + 0.5;
  star.style.animation = `twinkle ${Math.random() * 3 + 1}s infinite alternate`;
  page2Container.appendChild(star);
}

/* =============================
   KEYFRAMES
============================= */
const style = document.createElement('style');
style.innerHTML = `
@keyframes sparkle {
  0%, 100% { transform: translateY(0) scale(0.5); opacity: 0.5; }
  50% { transform: translateY(-50px) scale(1.2); opacity: 1; }
}

@keyframes twinkle {
  0% { opacity: 0.2; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(0.5); }
}
`;
document.head.appendChild(style);

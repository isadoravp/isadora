// PARTICULAS PÁGINA 1
const page1Container = document.getElementById('page1');

for (let i=0; i<80; i++){
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.width = p.style.height = `${Math.random()*3+1}px`;
  p.style.left = `${Math.random()*100}%`;
  p.style.top = `${Math.random()*100}%`;
  p.style.animation = `sparkle ${Math.random()*3+2}s linear infinite`;
  page1Container.appendChild(p);
}

// ESTRELAS PÁGINA 2
const page2Container = document.getElementById('page2');

for (let i=0; i<100; i++){
  const s = document.createElement('div');
  s.className = 'star';
  s.style.width = s.style.height = `${Math.random()*2+1}px`;
  s.style.left = `${Math.random()*100}%`;
  s.style.top = `${Math.random()*100}%`;
  s.style.animation = `twinkle ${Math.random()*3+1}s infinite alternate`;
  page2Container.appendChild(s);
}

// ADICIONA KEYFRAMES DINAMICAMENTE
const style = document.createElement('style');
style.innerHTML = `
@keyframes sparkle {
  0%,100% { transform: translateY(0) scale(0.5); opacity: 0.8; }
  50% { transform: translateY(-50px) scale(1.2); opacity:1; }
}
@keyframes twinkle {
  0% { opacity:0.2; transform: scale(0.5); }
  50% { opacity:1; transform: scale(1.2); }
  100% { opacity:0.2; transform: scale(0.5); }
}`;
document.head.appendChild(style);

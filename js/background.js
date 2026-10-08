
const canvas = document.querySelector("#particle-bg");
const ctx = canvas.getContext("2d");

let width;
let height;
let particles = [];

const mouse = {
  x: -1000,
  y: -1000,
  radius: 130
};

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const quantidade = Math.min(
    110,
    Math.floor((width * height) / 11000)
  );

  particles = Array.from({ length: quantidade }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    radius: Math.random() * 2 + 1
  }));
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("pointermove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("pointerleave", () => {
  mouse.x = -1000;
  mouse.y = -1000;
});

function animar() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    p.x += p.vx;
    p.y += p.vy;

    // Mantém as partículas dentro da tela
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    // Reação ao mouse: afasta as partículas próximas
    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const distancia = Math.hypot(dx, dy);

    if (distancia < mouse.radius && distancia > 0) {
      const forca = (mouse.radius - distancia) / mouse.radius;

      p.x += (dx / distancia) * forca * 2;
      p.y += (dy / distancia) * forca * 2;
    }

    // Desenha as partículas
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#a78bfa";
    ctx.fill();

    // Conecta partículas próximas
    for (let j = i + 1; j < particles.length; j++) {
      const outra = particles[j];
      const distanciaLinha = Math.hypot(
        p.x - outra.x,
        p.y - outra.y
      );

      if (distanciaLinha < 115) {
        const opacidade = 1 - distanciaLinha / 115;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(outra.x, outra.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacidade * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animar);
}

resizeCanvas();
animar();
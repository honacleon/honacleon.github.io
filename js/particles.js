// ============================================================
//  Fundo animado — partículas conectadas
//  Paleta: majoritariamente azul-noite/ciano, com dourado
//  pontual (detalhe). Fundo discreto, não compete com o conteúdo.
// ============================================================
(function () {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let mouseX = -1000;
    let mouseY = -1000;

    // Paleta — azul/ciano dominante; dourado é minoria (detalhe).
    const blues = [
        'rgba(91, 140, 255, 0.7)',   // azul
        'rgba(122, 162, 247, 0.6)',  // azul suave
        'rgba(137, 221, 255, 0.55)', // ciano suave
        'rgba(70, 100, 200, 0.6)',   // azul profundo
        'rgba(160, 190, 255, 0.5)',  // azul claro
    ];
    const golds = [
        'rgba(233, 196, 106, 0.65)', // dourado
        'rgba(212, 175, 55, 0.6)',   // dourado clássico
    ];

    function pickColor() {
        // ~18% das partículas em dourado → mantém o ouro como detalhe
        return Math.random() < 0.18
            ? golds[Math.floor(Math.random() * golds.length)]
            : blues[Math.floor(Math.random() * blues.length)];
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.55;
            this.speedY = (Math.random() - 0.5) * 0.55;
            this.color = pickColor();
            this.opacity = Math.random() * 0.35 + 0.25;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.025 + 0.01;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            this.pulse += this.pulseSpeed;
            this.currentOpacity = Math.min(1, this.opacity + Math.sin(this.pulse) * 0.18);

            // Atração sutil ao mouse
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
                const force = (160 - dist) / 160 * 0.03;
                this.x += dx * force;
                this.y += dy * force;
            }

            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        draw() {
            const c = this.color.replace(/[\d.]+\)$/, this.currentOpacity + ')');
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = c;
            ctx.shadowBlur = this.size * 5;
            ctx.shadowColor = c;
            ctx.fill();
            ctx.restore();
        }
    }

    function initParticles() {
        particles = [];
        const density = Math.floor((canvas.width * canvas.height) / 16000);
        const count = Math.min(120, Math.max(40, density));
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    const opacity = (1 - dist / 140) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(91, 140, 255, ${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawConnections();
        particles.forEach(p => { p.update(); p.draw(); });
        animationId = requestAnimationFrame(animate);
    }

    // Respeita preferência de movimento reduzido
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { cancelAnimationFrame(animationId); }
        else if (!reduceMotion) { animate(); }
    });

    resizeCanvas();
    initParticles();
    if (reduceMotion) {
        // Desenha um quadro estático sem loop de animação
        drawConnections();
        particles.forEach(p => { p.update(); p.draw(); });
    } else {
        animate();
    }
})();

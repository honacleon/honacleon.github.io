// Animated Background with Particles and Gradient Orbs
(function() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouseX = 0;
    let mouseY = 0;
    
    // Colors - Gold and Champagne palette
    const colors = [
        'rgba(212, 175, 55, 0.8)',   // Gold #D4AF37
        'rgba(251, 191, 36, 0.7)',   // Bright Gold
        'rgba(245, 158, 11, 0.65)',  // Amber
        'rgba(217, 119, 6, 0.55)',   // Dark Gold
        'rgba(255, 223, 186, 0.65)', // Champagne
        'rgba(250, 240, 230, 0.6)',  // Light Champagne
        'rgba(255, 248, 220, 0.65)', // Cream
    ];
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1.5;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.45 + 0.4;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.03 + 0.015;
        }
        
        update() {
            // Subtle movement
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Pulse effect
            this.pulse += this.pulseSpeed;
            this.currentOpacity = Math.min(1, this.opacity + Math.sin(this.pulse) * 0.25);
            
            // Mouse interaction (subtle attraction)
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 180) {
                const force = (180 - distance) / 180 * 0.04;
                this.x += dx * force;
                this.y += dy * force;
            }
            
            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            const visibleColor = this.color.replace(/[\d.]+\)$/, this.currentOpacity + ')');

            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = visibleColor;
            ctx.shadowBlur = this.size * 6;
            ctx.shadowColor = visibleColor;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 2
            );
            gradient.addColorStop(0, this.color.replace(/[\d.]+\)$/, (this.currentOpacity * 0.5) + ')'));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Initialize particles
    function initParticles() {
        particles = [];
        const baseDensity = Math.floor((canvas.width * canvas.height) / 14000);
        const particleCount = Math.min(140, Math.max(50, baseDensity + 15));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Draw connections between nearby particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections first (behind particles)
        drawConnections();
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
    
    // Visibility change - pause when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
    
    // Initialize
    resizeCanvas();
    initParticles();
    animate();
})();

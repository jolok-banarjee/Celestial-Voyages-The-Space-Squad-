(function() {
    const canvas = document.getElementById('stars');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const stars = [];
    const numStars = 200;
    function resize() { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; }
    function createStars() { stars.length = 0; for (let i = 0; i < numStars; i++) stars.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.5 + 0.5, alpha: Math.random(), speed: Math.random() * 0.02 + 0.005 }); }
    function draw() { ctx.clearRect(0, 0, width, height); stars.forEach(star => { star.alpha += star.speed; if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed; ctx.beginPath(); ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${Math.abs(star.alpha) * 0.8})`; ctx.fill(); }); requestAnimationFrame(draw); }
    resize(); createStars(); draw();
    window.addEventListener('resize', () => { resize(); createStars(); });
})();
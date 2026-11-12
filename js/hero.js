/*
 * Hero background effects. Choose one with SITE_DATA.heroEffect in js/data.js:
 * "none", "gradient", "network" or "both".
 */
(function () {
  const hero = document.getElementById("hero");
  const canvas = document.getElementById("hero-canvas");
  if (!hero || !canvas) return;

  const effect = (typeof SITE_DATA !== "undefined" && SITE_DATA.heroEffect) || "none";
  const useGradient = effect === "gradient" || effect === "both";
  const useNetwork = effect === "network" || effect === "both";

  if (useGradient) hero.classList.add("hero--gradient");
  if (!useNetwork) return;
  hero.classList.add("hero--network");

  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const LINK_DIST = 130;     // px: max distance for a line between two nodes
  const MOUSE_DIST = 170;    // px: nodes inside this radius are pulled to the mouse
  const MAX_SPEED = 0.35;    // px per frame

  let width = 0;
  let height = 0;
  let nodes = [];
  let color = "47, 111, 237";
  const mouse = { x: 0, y: 0, active: false };
  let running = false;
  let visible = true;
  let frameId = 0;

  // Read --accent from CSS so the network follows light/dark mode.
  function readColor() {
    const probe = document.createElement("span");
    probe.style.color = getComputedStyle(document.documentElement).getPropertyValue("--accent");
    document.body.append(probe);
    const match = getComputedStyle(probe).color.match(/\d+/g);
    probe.remove();
    if (match) color = match.slice(0, 3).join(", ");
  }

  function makeNode() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * MAX_SPEED * 2,
      vy: (Math.random() - 0.5) * MAX_SPEED * 2,
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Fewer nodes on small screens to save battery.
    const target = Math.min(width < 680 ? 35 : 80, Math.round((width * height) / 11000));
    while (nodes.length < target) nodes.push(makeNode());
    nodes.length = target;
    nodes.forEach((n) => {
      n.x = Math.min(n.x, width);
      n.y = Math.min(n.y, height);
    });
    if (!running) draw();
  }

  function step() {
    nodes.forEach((n) => {
      if (mouse.active) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_DIST && dist > 1) {
          n.vx += (dx / dist) * 0.02;
          n.vy += (dy / dist) * 0.02;
        }
      }
      const speed = Math.hypot(n.vx, n.vy);
      if (speed > MAX_SPEED * 2) {
        n.vx *= 0.95;
        n.vy *= 0.95;
      }
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(${color}, ${0.35 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      if (mouse.active) {
        const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dist < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(${color}, ${0.5 * (1 - dist / MOUSE_DIST)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${color}, 0.7)`;
      ctx.beginPath();
      ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    step();
    draw();
    frameId = requestAnimationFrame(loop);
  }

  // Animate only when the hero is on screen, the tab is visible and motion is allowed.
  function update() {
    const shouldRun = visible && !document.hidden && !reducedMotion.matches;
    if (shouldRun && !running) {
      running = true;
      frameId = requestAnimationFrame(loop);
    } else if (!shouldRun && running) {
      running = false;
      cancelAnimationFrame(frameId);
      draw(); // leave a still frame
    }
  }

  hero.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  hero.addEventListener("pointerleave", () => {
    mouse.active = false;
  });

  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    update();
  }).observe(hero);
  document.addEventListener("visibilitychange", update);
  reducedMotion.addEventListener("change", update);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    readColor();
    if (!running) draw();
  });
  window.addEventListener("resize", resize);

  readColor();
  resize();
  update();
})();

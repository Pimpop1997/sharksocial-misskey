// Matrix Rain Effect
const matrixRain = document.querySelector('.matrix-rain');
const canvas = document.createElement('canvas');
canvas.className = 'matrix-rain-canvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
matrixRain.appendChild(canvas);
const ctx = canvas.getContext('2d');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
const fontSize = 18;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = Array(columns).fill(1);
function drawMatrixRain() {
  ctx.fillStyle = 'rgba(15,26,26,0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#39ff14';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrixRain, 50);
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// Typewriter effect
function typewriter(text, cb) {
  const el = document.getElementById('typewriter');
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 24 + Math.random() * 24);
    } else if(cb) {
      cb();
    }
  }
  type();
}
// CLI & Command Handler
const cliInput = document.getElementById('cli-input');
const output = document.getElementById('output');
const welcome = 'SHARKSO🦈IAL Terminal Mock\nType: feed | chat | shop | wallet | help';
typewriter(welcome);
cliInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const cmd = cliInput.value.trim().toLowerCase();
    cliInput.value = '';
    output.innerHTML = '';
    if (cmd === 'feed') {
      typewriter('Loading feed...', async () => {
        const res = await fetch('/api/feed');
        const feed = await res.json();
        output.innerHTML = feed.map(f => `[#${f.id}] <b>${f.content}</b> <small>by user ${f.userId}</small> <span style="float:right">❤ ${f.likes}</span>`).join('<br>');
      });
    } else if (cmd === 'chat') {
      typewriter('Loading chat...', async () => {
        const res = await fetch('/api/chat');
        const chat = await res.json();
        output.innerHTML = chat.map(c => `<b>${c.message}</b> <small>user ${c.userId}</small>`).join('<br>');
      });
    } else if (cmd === 'shop') {
      typewriter('Loading shop...', async () => {
        const res = await fetch('/api/shop');
        const shop = await res.json();
        output.innerHTML = shop.map(s => `[${s.type}] <b>${s.name}</b> <span style="float:right">${s.price} 🪙</span>`).join('<br>');
      });
    } else if (cmd === 'wallet') {
      typewriter('Loading wallet...', async () => {
        const res = await fetch('/api/wallet');
        const wallet = await res.json();
        output.innerHTML = wallet.map(w => `<b>User ${w.userId}</b>: <span style="float:right">${w.balance} 🪙</span>`).join('<br>');
      });
    } else if (cmd === 'help') {
      typewriter('Available commands: feed, chat, shop, wallet, help');
    } else {
      typewriter('Unknown command. Try: feed | chat | shop | wallet | help');
    }
  }
});

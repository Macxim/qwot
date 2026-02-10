// Dynamic accent colors that change with each quote
const accentColors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
  '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
  '#F8B739', '#52B788', '#FF8C94', '#A8DADC'
];

// Curated quotes
const quotes = [
  { text: "You have power over your mind, not outside events.", author: "Marcus Aurelius" },
  { text: "The obstacle is the way.", author: "Marcus Aurelius" },
  { text: "Waste no more time arguing what a good man is.", author: "Marcus Aurelius" },
  { text: "If it is not right, do not do it.", author: "Marcus Aurelius" },
  { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
  { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
  { text: "He who fears death will never do anything worth a man.", author: "Seneca" },
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
  { text: "It is not that we have little time, but that we waste much of it.", author: "Seneca" },
  { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
  { text: "First say to yourself what you would be.", author: "Epictetus" },
  { text: "Do not seek for events to happen as you wish.", author: "Epictetus" },
  { text: "No man is free who is not master of himself.", author: "Epictetus" },
  { text: "If you want to improve, be content to be thought foolish.", author: "Epictetus" },
  { text: "Make the best use of what is in your power.", author: "Epictetus" },

  { text: "Discipline is choosing what you want most over what you want now." },
  { text: "Do not explain your philosophy. Embody it." },
  { text: "Strong minds discuss ideas, weak minds discuss people." },
  { text: "You suffer more in imagination than in reality." },
  { text: "Silence is a source of great strength." },
  { text: "Train the mind to be calm in every situation." },
  { text: "Endure, then enjoy." },
  { text: "The best revenge is not to be like your enemy." },
  { text: "A man who has mastered himself cannot be harmed." },
  { text: "What stands in the way becomes the training." },

  { text: "Focus on what you can control." },
  { text: "The present moment is all you truly own." },
  { text: "Character is fate." },
  { text: "Do the work. Let results speak." },
  { text: "Self-control is strength." },
  { text: "Ego is the enemy." },
  { text: "Comfort is the enemy of progress." },
  { text: "The mind adapts before the body." },
  { text: "Master yourself before seeking more." },
  { text: "Clarity beats motivation." },

  { text: "Consistency outperforms intensity." },
  { text: "Small actions done daily shape destiny." },
  { text: "Train for the worst, expect nothing." },
  { text: "Hard choices, easy life. Easy choices, hard life." },
  { text: "Stillness sharpens judgment." },
  { text: "Restraint is power." },
  { text: "Calm is a superpower." },
  { text: "Simplicity reveals truth." },
  { text: "Delay pleasure. Increase freedom." },
  { text: "Less desire, more peace." },

  { text: "Do not be overheard complaining." },
  { text: "Action cures fear." },
  { text: "Patience is not passive." },
  { text: "Strength grows in resistance." },
  { text: "What you avoid controls you." },
  { text: "Discomfort is the tuition for growth." },
  { text: "Train your mind like a weapon." },
  { text: "The disciplined mind is unstoppable." },
  { text: "Silence your ego. Sharpen your focus." },
  { text: "Control your reaction, control the outcome." },

  { text: "Your habits write your future." },
  { text: "Freedom begins with self-command." },
  { text: "Live as if being watched by your ideal self." },
  { text: "Excuses weaken resolve." },
  { text: "The path is built by walking." },
  { text: "Clarity comes from action." },
  { text: "Endure hardship without complaint." },
  { text: "A calm mind is a deadly advantage." },
  { text: "Train daily. Rest intentionally." },
  { text: "Do not negotiate with weakness." },

  { text: "Suffering reveals priorities." },
  { text: "Be strict with yourself, gentle with others." },
  { text: "Minimalism sharpens intent." },
  { text: "Discipline is self-respect." },
  { text: "Emotions follow actions." },
  { text: "Preparation reduces fear." },
  { text: "Let go of what you cannot command." },
  { text: "Fortune favors the prepared mind." },
  { text: "Purpose cuts through chaos." },
  { text: "Resilience is trained, not granted." },

  { text: "Daily effort compounds quietly." },
  { text: "Simplicity is harder than chaos." },
  { text: "Earn your confidence." },
  { text: "Your response defines you." },
  { text: "Do less, better." },
  { text: "Presence is power." },
  { text: "Mastery is built in boredom." },
  { text: "Pain is temporary. Skill remains." },
  { text: "Train your will like a muscle." },
  { text: "Order creates freedom." },

  { text: "Calm effort beats frantic motion." },
  { text: "Build the man, success follows." },
  { text: "Hard training, easy execution." },
  { text: "Detach from outcome. Commit to effort." },
  { text: "Control the controllables." },
  { text: "Live deliberately." },
  { text: "Let reason lead emotion." },
  { text: "Strength is quiet." },
  { text: "Your standards shape your future." },
  { text: "Practice hardship voluntarily." },

  { text: "No wasted motion." },
  { text: "Train in private. Perform in public." },
  { text: "A clear mind moves faster." },
  { text: "Discipline simplifies life." },
  { text: "Short-term pain, long-term gain." },
  { text: "Endurance builds authority." },
  { text: "Embrace responsibility." },
  { text: "Your mind sets the ceiling." },
  { text: "Order your inner world first." },
  { text: "Be ruthless with distractions." },

  { text: "Action beats intention." },
  { text: "Stillness precedes precision." },
  { text: "Refinement comes from repetition." },
  { text: "Self-respect begins with effort." },
  { text: "Focus is a moral choice." },
  { text: "Train until calm is automatic." },
  { text: "Hard work removes fear." },
  { text: "Build habits that build you." },
  { text: "Let discomfort teach you." },
  { text: "Earn your peace." },

  { text: "Your life reflects your discipline." },
  { text: "Strength grows in silence." },
  { text: "Less talk. More alignment." },
  { text: "Suffering well is a skill." },
  { text: "Do not outsource your resolve." },
  { text: "Precision beats speed." },
  { text: "Daily structure creates freedom." },
  { text: "Control your mornings, control your life." },
  { text: "Self-mastery precedes mastery of anything else." },
  { text: "Calm execution wins." }
];


// DOM Elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const refreshBtn = document.getElementById('refreshBtn');
const timeElement = document.getElementById('time');
const contentWrapper = document.querySelector('.content-wrapper');

// Particle system (lightweight Canvas animation)
class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById('particles');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 50;

    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle system
new ParticleSystem();

// Update time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}`;
}

// Get random accent color
function getRandomAccentColor() {
  return accentColors[Math.floor(Math.random() * accentColors.length)];
}

// Get random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const newAccentColor = getRandomAccentColor();

  // Update CSS variable for accent color
  document.documentElement.style.setProperty('--accent-color', newAccentColor);

  // Add transition class
  contentWrapper.classList.add('content-updating');

  setTimeout(() => {
    quoteElement.textContent = quote.text;
    authorElement.textContent = quote.author;
    contentWrapper.classList.remove('content-updating');
  }, 300);
}

// Refresh content
async function refreshContent() {
  getRandomQuote();
}

// Event listeners
refreshBtn.addEventListener('click', refreshContent);

// Initialize
updateTime();
setInterval(updateTime, 1000);
refreshContent();

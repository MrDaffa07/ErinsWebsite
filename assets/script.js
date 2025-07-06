// Main JavaScript file for Romantic Website
// Common functions and utilities

// Page transition effect
function pageTransition() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
}

// Initialize page transition on load
window.addEventListener('load', pageTransition);

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Floating hearts animation
function createFloatingHeart() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = getRandomHeart();
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 7000);
}

function getRandomHeart() {
    const hearts = ['💖', '💕', '💗', '💓', '💝', '💘', '💞', '💌'];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-yes, .btn-no');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Parallax effect for floating hearts
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.floating-heart');
    const speed = 0.5;
    
    parallax.forEach(element => {
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Random heart generator for special pages
function generateRandomHearts(count = 10) {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 200);
    }
}

// Audio control utilities
function playAudio(audioId, volume = 0.3) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.volume = volume;
        audio.play().catch(e => {
            console.log('Audio play prevented:', e);
        });
    }
}

function pauseAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.pause();
    }
}

// Typewriter effect utility
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Fade in animation utility
function fadeInElements(selector, delay = 200) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// Scale animation utility
function scaleInElements(selector, delay = 300) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }, index * delay);
    });
}

// Confetti utility for celebration
function createConfetti() {
    const colors = ['#ff6b81', '#a0e7e5', '#f9c5d1', '#ffd93d', '#6c5ce7', '#fd79a8'];
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.animation = 'confettiFall 3s linear forwards';
    confetti.style.zIndex = '1000';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Add confetti fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Screen size detection
function isMobile() {
    return window.innerWidth <= 768;
}

// Responsive font sizing
function adjustFontSize() {
    const titles = document.querySelectorAll('.title');
    titles.forEach(title => {
        if (isMobile()) {
            title.style.fontSize = '1.8rem';
        } else {
            title.style.fontSize = '2.5rem';
        }
    });
}

// Initialize responsive adjustments
window.addEventListener('resize', adjustFontSize);
document.addEventListener('DOMContentLoaded', adjustFontSize);

// Prevent right-click context menu (optional)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        window.location.href = 'index.html';
    }
    
    // Press 'Enter' to continue (if continue button exists)
    if (e.key === 'Enter') {
        const continueBtn = document.querySelector('.btn-primary');
        if (continueBtn) {
            continueBtn.click();
        }
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
        konamiCode = [];
    }
});

// Smooth page transitions
function smoothTransition(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add floating hearts periodically
    setInterval(createFloatingHeart, 2000);
    
    // Initialize fade-in animations
    fadeInElements('.content > *', 150);
    
    // Add touch effects for mobile
    if (isMobile()) {
        document.body.classList.add('mobile');
    }
});

// Export functions for use in other scripts
window.RomanticWebsite = {
    pageTransition,
    createFloatingHeart,
    generateRandomHearts,
    playAudio,
    pauseAudio,
    typeWriter,
    fadeInElements,
    scaleInElements,
    createConfetti,
    smoothTransition,
    isMobile
};
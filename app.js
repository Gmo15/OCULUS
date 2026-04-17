/**
 * Oculus Card - VIP Dashboard Logic
 */

// 1. 3D Metal Card Tilt Effect
const metalCard = document.getElementById('metalCard');
const cardShine = document.getElementById('cardShine');

if (metalCard) {
    metalCard.addEventListener('mousemove', (e) => {
        const rect = metalCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        metalCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        
        if (cardShine) {
            cardShine.style.opacity = '1';
            cardShine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, transparent 80%)`;
        }
    });

    metalCard.addEventListener('mouseleave', () => {
        metalCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        if (cardShine) cardShine.style.opacity = '0';
    });
}

// 2. OTP Generator Logic
const generateBtn = document.getElementById('generateBtn');
const otpDisplay = document.getElementById('otpDisplay');
const otpTimer = document.getElementById('otpTimer');

if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        // Simple random OTP
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const formatted = `${code.substring(0,2)} ${code.substring(2,4)} ${code.substring(4,6)}`;
        
        otpDisplay.innerText = formatted;
        otpDisplay.classList.remove('opacity-40');
        otpDisplay.classList.add('text-[#d2b581]');
        
        otpTimer.classList.remove('hidden');
        
        // Disable button briefly
        generateBtn.disabled = true;
        generateBtn.style.opacity = '0.8';
        
        setTimeout(() => {
            generateBtn.disabled = false;
            generateBtn.style.opacity = '1';
        }, 5000);
    });
}

// 3. Interactive Star Rating System
function rate(businessId, stars) {
    const container = document.getElementById(`stars-${businessId}`);
    if (!container) return;
    
    const starButtons = container.querySelectorAll('.star');
    
    starButtons.forEach((btn, index) => {
        if (index < stars) {
            btn.classList.add('text-[#d2b581]');
            btn.classList.remove('text-zinc-700');
        } else {
            btn.classList.remove('text-[#d2b581]');
            btn.classList.add('text-zinc-700');
        }
    });

    // Optional: Visual feedback that it was "sent" to the business
    console.log(`Rating for business ${businessId}: ${stars} stars. Sharing with establishment...`);
}

// Export for global access via onclick
window.rate = rate;

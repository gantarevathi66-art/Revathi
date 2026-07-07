// పేజీ పూర్తిగా లోడ్ అయిన తర్వాత రన్ అవుతుంది
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        // 3 గీతలను క్లిక్ చేసినప్పుడు
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("మొబైల్ మెనూ లేదా నవ్ లింక్స్ ఐడీలు దొరకలేదు!");
    }
});
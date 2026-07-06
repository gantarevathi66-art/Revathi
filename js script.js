document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    /* ==========================================================================
       PORTFOLIO GRID FILTER SYSTEM
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if(filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Switch Active Styling State
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if(filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                    }
                });
            });
        });
    }

    /* ==========================================================================
       LIGHTBOX PREVIEW DIALOG SYSTEM
       ========================================================================== */
    const lightbox = document.getElementById('portfolioLightbox');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const closeLightbox = document.getElementById('lightboxClose');
    const detailButtons = document.querySelectorAll('.view-details-btn');

    if(detailButtons.length > 0 && lightbox) {
        detailButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                lightboxTitle.innerText = btn.getAttribute('data-title');
                lightboxDesc.innerText = btn.getAttribute('data-desc');
                lightbox.style.display = 'flex';
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Close when clicking outside content area
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) lightbox.style.display = 'none';
        });
    }

    /* ==========================================================================
       CONTACT FORM VALIDATION PIPELINE
       ========================================================================== */
    const contactForm = document.getElementById('portfolioForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('formName').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            
            if(name === "" || email === "") {
                alert("Please properly fill out all validation fields.");
                return;
            }
            
            alert(`Thank you, ${name}! Your portfolio connection message was captured successfully.`);
            contactForm.reset();
        });
    }

    /* ==========================================================================
       SCROLL TO TOP INTERACTION ENGINE
       ========================================================================== */
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if(scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
document.querySelectorAll('.view-details-btn').forEach(element => {
    element.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const desc = this.getAttribute('data-desc');
        
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDesc = document.getElementById('lightboxDesc');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightbox = document.getElementById('portfolioLightbox');

        if (lightboxTitle && lightboxDesc && lightbox) {
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;
            
            // ఒకవేళ డైరెక్ట్ ఇమేజ్ క్లిక్ చేస్తే
            if (this.tagName.toLowerCase() === 'img') {
                lightboxImg.src = this.src;
                lightboxImg.style.display = 'block';
            } else {
                // ఒకవేళ 'View Details' బటన్ క్లిక్ చేస్తే
                const cardImg = this.closest('.project-card').querySelector('.project-img-placeholder img');
                if (cardImg) {
                    lightboxImg.src = cardImg.src;
                    lightboxImg.style.display = 'block';
                } else {
                    lightboxImg.style.display = 'none'; // ఇమేజ్ లేని కార్డ్స్ కోసం (Icons)
                }
            }
            
            lightbox.style.display = 'flex'; 
        }
    });
});

// క్లోజ్ బటన్ క్లిక్ చేసినప్పుడు క్లోజ్ అవ్వడానికి
const closeBtn = document.getElementById('lightboxClose');
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        document.getElementById('portfolioLightbox').style.display = 'none';
    });
}

// బయట డార్క్ బ్యాక్‌గ్రౌండ్ మీద క్లిక్ చేసినా క్లోజ్ అవ్వడానికి
const lightboxModal = document.getElementById('portfolioLightbox');
if (lightboxModal) {
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
}

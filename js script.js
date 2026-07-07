document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       MOBILE MENU TOGGLE (రెస్పాన్సివ్ మొబైల్ మెనూ)
       ========================================================================== */
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // క్లిక్ ఈవెంట్ వెనుక ఉన్న బాడీ ఎలిమెంట్స్‌కు వెళ్లకుండా ఆపుతుంది
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // మెనూ ఓపెన్ లో ఉన్నప్పుడు స్క్రీన్ మీద ఎక్కడ క్లిక్ చేసినా మెనూ ఆటోమేటిక్‌గా క్లోజ్ అవ్వడానికి
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // మొబైల్ మెనూలోని ఏదైనా లింక్ క్లిక్ చేసినప్పుడు కూడా మెనూ క్లోజ్ అవ్వాలి
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       PORTFOLIO GRID FILTER SYSTEM
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // పాత యాక్టివ్ స్టైల్‌ను తీసివేసి, ప్రస్తుత బటన్‌కు యాడ్ చేస్తుంది
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                    }
                });
            });
        });
    }

    /* ==========================================================================
       LIGHTBOX PREVIEW DIALOG SYSTEM (ఇమేజ్ సపోర్ట్‌తో)
       ========================================================================== */
    const lightbox = document.getElementById('portfolioLightbox');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightbox = document.getElementById('lightboxClose');
    const detailButtons = document.querySelectorAll('.view-details-btn');

    if (detailButtons.length > 0 && lightbox) {
        detailButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const title = this.getAttribute('data-title');
                const desc = this.getAttribute('data-desc');
                
                if (lightboxTitle) lightboxTitle.innerText = title;
                if (lightboxDesc) lightboxDesc.innerText = desc;
                
                // ఇమేజ్ ప్రివ్యూ లాజిక్
                if (lightboxImg) {
                    if (this.tagName.toLowerCase() === 'img') {
                        lightboxImg.src = this.src;
                        lightboxImg.style.display = 'block';
                    } else {
                        const cardImg = this.closest('.project-card')?.querySelector('.project-img-placeholder img');
                        if (cardImg) {
                            lightboxImg.src = cardImg.src;
                            lightboxImg.style.display = 'block';
                        } else {
                            lightboxImg.style.display = 'none';
                        }
                    }
                }
                lightbox.style.display = 'flex';
            });
        });

        if (closeLightbox) {
            closeLightbox.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        }

        // లైట్‌బాక్స్ బ్యాక్‌గ్రౌండ్ (డార్క్ ఏరియా) క్లిక్ చేసినా క్లోజ్ అవ్వడానికి
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.style.display = 'none';
        });
    }

    /* ==========================================================================
       CONTACT FORM VALIDATION PIPELINE
       ========================================================================== */
    const contactForm = document.getElementById('portfolioForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('formName').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            
            if (name === "" || email === "") {
                alert("Please properly fill out all validation fields.");
                return;
            }
            
            alert(`Thank you, ${name}! Your portfolio connection message was captured successfully.`);
            contactForm.reset();
        });
    }

    /* ==========================================================================
       SCROLL TO TOP INTERACTION ENGINE (బగ్ ఫిక్స్ చేయబడింది)
       ========================================================================== */
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.style.display = 'flex'; // ఇక్కడ తప్పును సరిచేసాము
            } else {
                scrollTopBtn.style.display = 'none';  // ఇక్కడ తప్పును సరిచేసాము
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
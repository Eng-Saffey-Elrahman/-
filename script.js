document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        if(navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            document.getElementById("menuToggle").querySelector("i").classList.add("fa-bars");
            document.getElementById("menuToggle").querySelector("i").classList.remove("fa-xmark");
            
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    let cartCountValue = 0;
    const cartCountBadge = document.querySelector(".cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart, .add-to-cart-simple");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCountValue++;
            cartCountBadge.textContent = cartCountValue;
            
            button.style.transform = "scale(0.9)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);

            const toast = document.createElement("div");
            toast.style.position = "fixed";
            toast.style.bottom = "30px";
            toast.style.left = "30px";
            toast.style.background = "linear-gradient(135deg, #ff8008 0%, #ffc837 100%)";
            toast.style.color = "#000";
            toast.style.padding = "1rem 2rem";
            toast.style.borderRadius = "10px";
            toast.style.fontWeight = "bold";
            toast.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
            toast.style.zIndex = "2000";
            toast.style.transition = "all 0.4s ease";
            toast.innerText = "تم إضافة المنتج إلى سلة المشتريات بنجاح!";
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = "0";
                toast.style.transform = "translateY(20px)";
                setTimeout(() => toast.remove(), 400);
            }, 2500);
        });
    });

    const sections = document.querySelectorAll("section, main");
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    const heroImageCard = document.querySelector(".hero-image-card");
    if(heroImageCard) {
        window.addEventListener("mousemove", (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
            heroImageCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        window.addEventListener("mouseleave", () => {
            heroImageCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            heroImageCard.style.transition = "all 0.5s ease";
        });
        
        window.addEventListener("mouseenter", () => {
            heroImageCard.style.transition = "none";
        });
    }

    const contactForm = document.getElementById("shinyContactForm");
    if(contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("شكراً لتواصلك مع شاينى! سيقوم مستشار التصميم بالتواصل معك عبر الواتساب خلال دقائق معدودة.");
            contactForm.reset();
        });
    }
});
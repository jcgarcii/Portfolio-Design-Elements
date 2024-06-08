document.addEventListener("DOMContentLoaded", function () {
    // Hero Slider
    let slideIndex = 1;
    let slideInterval;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("hero-slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    showSlides(slideIndex);

    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 4000);

    document.querySelector(".prev").addEventListener("click", function () {
        clearInterval(slideInterval);
        plusSlides(-1);
        slideInterval = setInterval(function () {
            plusSlides(1);
        }, 4000);
    });

    document.querySelector(".next").addEventListener("click", function () {
        clearInterval(slideInterval);
        plusSlides(1);
        slideInterval = setInterval(function () {
            plusSlides(1);
        }, 4000);
    });

    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            clearInterval(slideInterval);
            currentSlide(i + 1);
            slideInterval = setInterval(function () {
                plusSlides(1);
            }, 4000);
        });
    }

    // Skills Section Animation
    const skillSlides = document.querySelectorAll(".skill-slide");

    skillSlides.forEach((slide, index) => {
        slide.style.transitionDelay = `${index * 100}ms`;
        slide.style.opacity = 1;
        slide.style.transform = "translateY(0)";
    });

    const delay = skillSlides.length * 100;
    skillSlides.forEach((slide, index) => {
        setTimeout(() => {
            slide.style.transform = "translateY(-20px)";
            setTimeout(() => {
                slide.style.transform = "translateY(0)";
            }, 500);
        }, index * 100);
    });

    skillSlides.forEach(slide => {
        slide.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });

        slide.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Night Mode Toggle
    const nightModeToggle = document.getElementById('night-mode-toggle');

    nightModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('night-mode');
        } else {
            document.body.classList.remove('night-mode');
        }
    });

    // Scroll Animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bounce-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

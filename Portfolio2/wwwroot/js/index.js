// Hero Slider
let slideIndex = 1;
showSlides(slideIndex);

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
document.addEventListener("DOMContentLoaded", function () {
    const skillSlides = document.querySelectorAll(".skill-slide");

    // Initial animation when page loads
    skillSlides.forEach((slide, index) => {
        slide.style.transitionDelay = `${index * 100}ms`; // Delay animation for each slide
        slide.style.opacity = 1;
        slide.style.transform = "translateY(0)";
    });

    // Dance effect animation
    const delay = skillSlides.length * 100; // Total animation duration
    skillSlides.forEach((slide, index) => {
        setTimeout(() => {
            slide.style.transform = "translateY(-20px)"; // Move up
            setTimeout(() => {
                slide.style.transform = "translateY(0)"; // Move back down
            }, 500); // Adjust this value for the dance speed
        }, index * 100); // Delay each dance step
    });

    // Hover effect to enlarge the logo
    skillSlides.forEach(slide => {
        slide.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });

        slide.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });


});
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggle-switch");
    const languagesLogos = document.getElementById("languages-logos");
    const frameworksLogos = document.getElementById("frameworks-logos");
    const mainText = document.getElementById("main-text");
    const subText = document.getElementById("sub-text");

    function switchToLanguages() {
        mainText.innerText = "Languages";
        subText.innerText = "Here are a few languages that I have experience with; \n As I continue to learn paradigms, I look to continue to add to this collection. Functional programming languages + other lower-level langauges come to mind.";
        languagesLogos.style.display = "flex";
        frameworksLogos.style.display = "none";
    }

    function switchToFrameworks() {
        mainText.innerText = "Technologies/Frameworks";
        subText.innerText = "Does your organization use any of these? We may be a good match! \n I have used the following (and more I may not be including) in extensive projects in both my academic and professional careers:";
        languagesLogos.style.display = "none";
        frameworksLogos.style.display = "flex";
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            switchToFrameworks();
        } else {
            switchToLanguages();
        }
    });

    // Initial load
    switchToLanguages();
});

// Select the night mode switch input element
const nightModeToggle = document.getElementById('night-mode-toggle');

// Listen for change event on the night mode switch
nightModeToggle.addEventListener('change', function () {
    // Check if the switch is checked (night mode activated)
    if (this.checked) {
        // Apply dark mode styles
        document.body.classList.add('night-mode');
    } else {
        // Remove dark mode styles
        document.body.classList.remove('night-mode');
    }
});

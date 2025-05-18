// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Hamburger Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing Animation
const text = "Dheeraj";
const typedName = document.getElementById("typed-name");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typedName.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    } else {
        setTimeout(() => {
            typedName.textContent = "";
            index = 0;
            typeWriter();
        }, 2000); // restart typing after 2 sec pause
    }
}

typedName.textContent = ""; // Clear the placeholder
typeWriter();

// Scroll-based animation (fade in on scroll)
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    {
        threshold: 0.2,
    }
);

sections.forEach(section => {
    observer.observe(section);
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    body.classList.add("light");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// for academic and professional switch
function showExperienceTab(tabId, button) {
    const tabs = document.querySelectorAll('.tab');
    const timelines = document.querySelectorAll('.timeline');

    tabs.forEach(tab => tab.classList.remove('active'));
    timelines.forEach(tl => tl.style.display = 'none');

    button.classList.add('active');
    document.getElementById(tabId).style.display = 'block';
}


// Animate skill bars on scroll into view
const skillBars = document.querySelectorAll('.progress-bar');

const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percent = bar.getAttribute('data-skill');
            const innerBar = document.createElement('div');
            innerBar.style.width = percent + '%';
            bar.appendChild(innerBar);
            observer.unobserve(bar);
        }
    });
}, { threshold: 0.3 });

skillBars.forEach(bar => observer.observe(bar));
document.querySelectorAll('.progress-bar').forEach(bar => {
    const skillLevel = bar.getAttribute('data-skill') + '%';
    bar.querySelector('.progress-fill').style.setProperty('--skill-level', skillLevel);
});


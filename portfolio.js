// Hamburger and sidebar toggle for mobile
const hamburger = document.getElementById('hamburger-btn');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('nav-overlay');

if (hamburger && sideNav && overlay) {
  hamburger.addEventListener('click', () => {
    sideNav.classList.toggle('open');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    sideNav.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Optional: Close nav when clicking a link (for mobile UX)
  sideNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        sideNav.classList.remove('open');
        hamburger.classList.remove('open');
        overlay.classList.remove('active');
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav a");
  const sections = document.querySelectorAll("section");

  // Smooth scroll with a slight delay when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      // Only preventDefault and do custom scroll if it's an in-page link
      if (link.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    });
  });

  // Button scroll to contact section with a slight delay (id is "contact" in your HTML)
  const contactBtn = document.querySelector(".but");
  if (contactBtn) {
    contactBtn.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        // Use lower-case "contact" for the ID (matches your HTML)
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    });
  }

  // Function to highlight the active nav item based on scroll position only
  function highlightNavLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });

    // Highlight the corresponding nav item only based on scroll
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  // Trigger highlightNavLink on scroll and once on load
  window.addEventListener("scroll", highlightNavLink);
  highlightNavLink();
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav a");
  const sections = document.querySelectorAll("section");

  // Smooth scroll with a slight delay when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // Remove '#' from href
      const target = document.getElementById(targetId);

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
  });

  // Button scroll to Contact Me section with a slight delay
  document.querySelector(".but").addEventListener("click", function (event) {
    event.preventDefault();
    setTimeout(() => {
      document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
    }, 300);
  });

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

  // Trigger highlightNavLink on scroll
  window.addEventListener("scroll", highlightNavLink);
});


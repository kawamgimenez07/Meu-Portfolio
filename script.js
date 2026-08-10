const phrases = [
    "Desenvolvimento Multiplataforma",
    "Modelagem de Dados (DER)",
    "Engenharia de Requisitos",
    "Lógica de Programação"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const target = document.getElementById("typewriter-text");
  
  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
  
    let typeSpeed = isDeleting ? 40 : 80;
  
    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pausa no final da frase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }
  
    setTimeout(typeEffect, typeSpeed);
  }
  
  document.addEventListener("DOMContentLoaded", typeEffect);
  const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-pills-custom .nav-link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});

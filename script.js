const typingElement = document.getElementById('typing-text');
const words = [
  'Desenvolvedor Multiplataforma', 
  'Front-end Web', 
  'Engenheiro de Requisitos', 
  'Modelagem de Dados'
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingElement) return;
  
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1800; // Pausa ao concluir a palavra
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navCollapse = document.getElementById('navbarNav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });
  });
});
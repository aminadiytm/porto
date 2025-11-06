// -------------------------- TOGGLE BUTTON --------------------------
const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
    hamburger.classList.toggle("ri-menu-fill")
    hamburger.classList.toggle("text-secondary")
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
        hamburger.classList.toggle("ri-menu-fill")
        hamburger.classList.toggle("text-secondary")
    })
})

// -------------------------- READ MORE BUTTON --------------------------
function toggleText(id, button) {
    const desc= document.getElementById(id);
    
    desc.classList.toggle('line-clamp-4');
    desc.classList.toggle('text-justify');
    button.innerText = desc.classList.contains('line-clamp-4') ? 'Read More' : 'Read Less';
}

  const container = document.getElementById("project-container");
  let startX = 0;
  let currentSlide = 0;
  const totalSlides = container.children.length;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // minimal jarak swipe
      if (diff > 0 && currentSlide < totalSlides - 1) {
        currentSlide++; // geser ke kanan
      } else if (diff < 0 && currentSlide > 0) {
        currentSlide--; // geser ke kiri
      }
    }

    container.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
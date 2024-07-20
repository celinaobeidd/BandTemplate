// slide show 

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }
  
    function updateSlider() {
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }
  
    setInterval(nextSlide, 3000);
});

// close window ticket modal

document.addEventListener('DOMContentLoaded', function() {
  const ticketModal = document.getElementById('ticket-modal');

  // Hide modal when clicking outside of it
  document.addEventListener('click', function(event) {
      if (!ticketModal.contains(event.target) && 
      !event.target.matches('#buy-button')) {
          ticketModal.style.display = 'none';
      }
  });
});


// navbar responsive

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menu-bar").addEventListener("click", function() {
      let navbar = document.getElementById("navbar");
      if (navbar.classList.contains("responsive")) {
          navbar.classList.remove("responsive");
      } else {
          navbar.classList.add("responsive");
      }
  });
});




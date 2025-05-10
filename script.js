// Moving pictures and animated text

const images = document.querySelectorAll('.moving-content img');
const texts = [
  'Trendsetting Style for the Bold.',
  'Comfort Meets Unique Fashion.',
  'Designed to Make You Stand Out.'
];
const textElement = document.getElementById('animatedText');

let currentIndex = 0;

function showNext() {
  // Hide current image
  images[currentIndex].classList.remove('active');

  // Increment index and reset if needed
  currentIndex = (currentIndex + 1) % images.length;

  // Show next image
  images[currentIndex].classList.add('active');

  // Update text
  textElement.textContent = texts[currentIndex];
}

// Change image and text every 4 seconds
setInterval(showNext, 4000);

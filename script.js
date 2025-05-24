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
document.getElementById('feedback-form').addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill in all fields before submitting.');
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});
document.querySelectorAll('.buy-now-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for choosing this product! Purchase functionality coming soon.');
  });
});
function showUnavailableAlert() {
  alert("The product is not available");
}

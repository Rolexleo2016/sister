// script.js
const letter = document.getElementById('letter');
const landing = document.getElementById('landing');
const letterContent = document.getElementById('letter-content');

letter.addEventListener('click', () => {
  // Add zoom effect to the letter when clicked
  letter.style.transform = 'scale(1.2)';
  letter.style.transition = 'transform 0.5s ease';

  setTimeout(() => {
    landing.classList.remove('active');
    letterContent.classList.add('active');
  }, 500); // wait for zoom animation to finish
});

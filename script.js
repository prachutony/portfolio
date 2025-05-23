// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const savedMode = localStorage.getItem('mode');
const bgImages = [
  document.getElementById('bg1'),
  document.getElementById('bg2'),
  document.getElementById('bg3'),
  document.getElementById('bg4'),
  document.getElementById('bg5')
];


function updateBackgroundImage(scrollPercent) {
  const ranges = [
    { bg: bgImages[0], min: 0, max: 10 },   // bg1: 0% - 14%
    { bg: bgImages[1], min: 10, max: 32 },  // bg2
    { bg: bgImages[2], min: 32, max: 50 },  // bg3
    { bg: bgImages[3], min: 50, max: 92 },  // bg4
    { bg: bgImages[4], min: 92, max: 105 }  // bg5
  ];

  ranges.forEach(({ bg, min, max }) => {
    if (scrollPercent >= min && scrollPercent < max) {
      bg.classList.add('bg-visible');
    } else {
      bg.classList.remove('bg-visible');
    }
  });
}

function handleScroll() {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollY / docHeight) * 100;

  updateBackgroundImage(scrollPercent);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  updateBackgroundImage(0); // force bg1 to show initially
  handleScrollSlideUp();    // also run your card animations
});




if (savedMode === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light');
  }
});



function showPopup(event) {
  event.preventDefault(); // Prevent default form submission
  document.getElementById('popup-overlay').style.display = 'flex';

  // Send the form data using fetch
  const form = event.target;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => form.reset());
}

function hidePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
}



function handleScrollSlideUp() {
  const cards = document.querySelectorAll('.card, .skills-card');

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      card.classList.add('slide-up');
    } else {
      card.classList.remove('slide-up');
    }
  });
}

window.addEventListener('scroll', handleScrollSlideUp);
window.addEventListener('load', handleScrollSlideUp);


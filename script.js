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


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollY / docHeight) * 100;

  const ranges = [
    { bg: bgImages[0], min: 1, max: 14 },   // bg1: 0% - 15%
    { bg: bgImages[1], min: 14, max: 37 },  // bg2: 15% - 30%
    { bg: bgImages[2], min: 37, max: 59 },  // bg3: 30% - 50%
    { bg: bgImages[3], min: 59, max: 92 },  // bg4: 50% - 85%
    { bg: bgImages[4], min: 92, max: 100 }  // bg5: 85% - 100%
  ];

  ranges.forEach(({ bg, min, max }) => {
    if (scrollPercent >= min && scrollPercent < max) {
      bg.classList.add('bg-visible');
    } else {
      bg.classList.remove('bg-visible');
    }
  });
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







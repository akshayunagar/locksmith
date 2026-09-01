// Navbar scrolled state
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', ()=>{
  nav.classList.toggle('scrolled', window.scrollY > 12);
});

// Subtle parallax on hero background blob
const bg = document.getElementById('parallaxBg');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  bg.style.transform = `translateY(${y * 0.15}px)`;
});

// Scroll reveal (fade-up)
const revealEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.15});
revealEls.forEach(el=>io.observe(el));

// Page fade-in
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ready");
});

// Smooth reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, {threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Hover video previews (desktop)
const videos = document.querySelectorAll('.video-card video');
videos.forEach(v => {
  v.addEventListener('mouseenter', ()=> v.play());
  v.addEventListener('mouseleave', ()=> { v.pause(); v.currentTime = 0; });
});

// Mobile: ensure controls visible on touch
if ('ontouchstart' in window){
  videos.forEach(v => v.setAttribute('controls', 'controls'));
}

// Fake submit (connect later to Formspree/Netlify)
window.sendMessage = (e) => {
  e.preventDefault();
  alert("Thanks! I’ll reply soon.");
  return false;
};

// Smooth page transition on internal links
document.querySelectorAll('a[href$=".html"]').forEach(link=>{
  link.addEventListener('click', (e)=>{
    const url = link.getAttribute('href');
    if (!url) return;
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(()=> window.location.href = url, 180);
  });
});

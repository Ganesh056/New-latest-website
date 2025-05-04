// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typewriter effect
    const typeTextElements = document.querySelectorAll('.type-text');
    let currentIndex = 0;
    
    function typeWriter() {
        typeTextElements.forEach((element, index) => {
            element.style.display = index === currentIndex ? 'inline-block' : 'none';
        });
        currentIndex = (currentIndex + 1) % typeTextElements.length;
    }
    setInterval(typeWriter, 2000);

    // Mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Audio player controls
    const audioPlayer = document.querySelector('audio');
    const albumArt = document.querySelector('.album-art');
    
    albumArt.addEventListener('click', () => {
        audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
    });
});

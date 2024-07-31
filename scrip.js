document.addEventListener('DOMContentLoaded', function() {
    const message = "You light up my life in ways I never thought possible. Happy National Girlfriend Day!";
    document.getElementById('message').innerText = message;

    // Carousel functionality for the memories page
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Auto-slide functionality (optional)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});

// Show the Memories page and hide the home page
function showMemories() {
    document.getElementById('gh').style.display = 'none';
    document.getElementById('jj').style.display = 'block';
}

function show() {
    document.getElementById('gh').style.display = 'block';
    document.getElementById('jj').style.display = 'none';
}

// Background music control
const music = document.getElementById('background-music');

// Check if music was previously playing
if (localStorage.getItem('musicPlaying') === 'true' || localStorage.getItem('musicPlaying') === null) {
    music.play();
}

function toggleMusic() {
    const control = document.getElementById('music-control');
    if (music.paused) {
        music.play();
        localStorage.setItem('musicPlaying', 'true');
        control.textContent = 'Pause Music';
    } else {
        music.pause();
        localStorage.setItem('musicPlaying', 'false');
        control.textContent = 'Play Music';
    }
}

function gf(){
    document.getElementById('gh').style.display='block';
    document.getElementById('hh').style.display='none';
    toggleMusic();
}

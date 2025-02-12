let isPlaying = false;
const audio = document.getElementById("loveSong");

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        document.getElementById("playMusic").innerText = "Play Music 🎶";
    } else {
        audio.play();
        document.getElementById("playMusic").innerText = "Pause Music ⏸️";
    }
    isPlaying = !isPlaying;
}

function showMessage() {
    document.getElementById("loveLetter").style.display = "block";

    // Confetti burst
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Floating hearts effect
    for (let i = 0; i < 200; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 500 + "vw";
        heart.style.animationDuration = Math.random() * 5 + 8 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 120000000);
    }
}

// Slideshow effect
let slides = document.querySelectorAll(".slide");
let index = 0;
function showSlides() {
    slides.forEach(slide => slide.classList.remove("show"));
    slides[index].classList.add("show");
    index = (index + 1) % slides.length;
}
setInterval(showSlides, 5000);

// Snow effect
// setInterval(() => {
//     let snowflake = document.createElement("div");
//     snowflake.innerHTML = "❄️";
//     snowflake.classList.add("snowflake");
//     snowflake.style.left = Math.random() * 100 + "vw";
//     snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
//     document.body.appendChild(snowflake);

//     setTimeout(() => {
//         snowflake.remove();
//     }, 5000);
// }, 500);

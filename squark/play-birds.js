function playBirdSound(e) {
    const audio = document.querySelector(`audio[data-bird-type="${e.target.getAttribute("data-bird-type")}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const bird = document.querySelector(".bird");
    bird.addEventListener("click", playBirdSound);
})

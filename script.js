console.log("script working")

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-button');

  tabs.forEach(button => {
    button.addEventListener('click', () => {
      const soundId = button.getAttribute('data-sound');
      const audio = document.getElementById(soundId);

      if (audio) {
        document.querySelectorAll('audio').forEach(sound => {
          sound.pause();
          sound.currentTime = 0; 
        });

        audio.currentTime = 0;
        audio.play().catch(error => {
          console.warn("Браузер блокує автоматичний звук. Спробуй спочатку клікнути будь-де на сторінці:", error);
        });
      }
    });
  });
});

const cards = document.querySelectorAll(".species-card");
const counter = document.querySelector("#counter");
let count = 0

cards.forEach(card => {
    card.addEventListener("click", () => {

        if (!card.classList.contains("active")) {
            card.classList.add("active");
            count++;
            counter.textContent = count;
        }

    });
});
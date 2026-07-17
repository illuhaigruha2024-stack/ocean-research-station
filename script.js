console.log("script working")

document.addEventListener('DOMContentLoaded', () => {
  alert("JS підключено і він працює!");

  const tabs = document.querySelectorAll('.tab-button');

  tabs.forEach(button => {
    button.addEventListener('click', () => {
      const soundId = button.getAttribute('data-sound');
      
      alert("Ти натиснув на кнопку! Має грати звук: " + soundId);

      const audio = document.getElementById(soundId);
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(err => alert("Помилка відтворення: " + err));
      } else {
        alert("Аудіо-елемент з id '" + soundId + "' не знайдено в HTML!");
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

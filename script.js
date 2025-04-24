function openEnvelope() {
    document.getElementById("envelope").classList.add("hidden");
    document.getElementById("calendar").classList.remove("hidden");
    document.getElementById("birthday-audio").play();
  }
  
  function openBook(day) {
    if (day === 25) {
      document.getElementById("calendar").classList.add("hidden");
      document.getElementById("book").classList.remove("hidden");
    }
  }
  
  function turnPage() {
    document.getElementById("book").classList.add("opened");
  }
  
  // Generate kalender
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("calendar-grid");
    for (let i = 1; i <= 30; i++) {
      const day = document.createElement("div");
      day.classList.add("day");
      if (i === 25) {
        day.classList.add("special");
        day.innerHTML = "25 ❤️";
      } else {
        day.textContent = i;
      }
      day.onclick = () => openBook(i);
      grid.appendChild(day);
    }
  });
  
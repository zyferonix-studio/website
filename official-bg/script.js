function createStars() {
  const starsContainer = document.getElementById("stars");

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    const randomSize = Math.random() * (4 - 2) + 2;
    star.style.width = `${randomSize}px`;
    star.style.height = `${randomSize}px`;
    starsContainer.appendChild(star);

    setTimeout(() => {
      star.style.opacity = 1;
      star.style.transform = "scale(1)";
      setTimeout(() => {
        star.style.opacity = 0;
        star.style.transform = "scale(0)";
        setTimeout(() => {
          starsContainer.removeChild(star);
          createStar();
        }, Math.random() * 2800 + 1200);
      }, 4000);
    }, Math.random() * 2800 + 200);
  }

  for (let i = 0; i < 200; i++) {
    createStar();
  }
}

window.addEventListener("load", createStars);

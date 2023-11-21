let zIndexCounter = 1;

function openWindow(title) {
  const windowsContainer = document.getElementById("windows-container");

  const windowElement = document.createElement("div");
  windowElement.className = "window";
  windowElement.style.zIndex = zIndexCounter++;
  windowElement.innerHTML = `<h2>${title}</h2><p>Contenido de la ventana ${title}.</p>`;

  // Hacer que la ventana sea movible
  makeWindowDraggable(windowElement);

  windowsContainer.appendChild(windowElement);
}

function makeWindowDraggable(windowElement) {
  let offsetX,
    offsetY,
    isDragging = false;

  windowElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;
    windowElement.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      windowElement.style.left = `${x}px`;
      windowElement.style.top = `${y}px`;
    }
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      windowElement.style.transition = "all 0.3s ease";
    }
    isDragging = false;
  });
}

function toggleStartMenu() {
  const startMenu = document.getElementById("start-menu");
  startMenu.style.display =
    startMenu.style.display === "block" ? "none" : "block";
}

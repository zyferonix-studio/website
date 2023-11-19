const entries = [
  "Booting up...",
  "Performing self-test...",
  "Checking memory integrity...",
  "Detecting hardware components...",
  "Loading firmware...",
  "Initializing hardware...",
  "Configuring system settings...",
  "Activating swap...",
  "Checking battery status...",
  "Updating package repositories...",
  "Scanning for available updates...",
  "Installing software updates...",
  "Initializing virtual memory...",
  "Optimizing system performance...",
  "Checking for available disk space...",
  "Configuring power settings...",
  "Initializing display settings...",
  "Loading system icons...",
  "Configuring desktop environment...",
  "Setting up audio devices...",
  "Configuring sound devices...",
  "Initializing system databases...",
  "Configuring time zone...",
  "Checking system permissions...",
  "Launching login manager...",
  "Starting cron jobs...",
  "Initializing system services...",
  "Setting up user accounts...",
  "Checking for software updates...",
  "Running startup scripts...",
  "OS Startup complete.",
];

const scrollSpeed = 1000;

function displayEntries() {
  let i = 0;
  const intervalId = setInterval(() => {
    console.log(entries[i]);
    window.scrollTo(0, document.body.scrollHeight);
    i++;
    if (i === entries.length) {
      clearInterval(intervalId);
    }
  }, scrollSpeed);
}

window.onload = displayEntries;

function renderTerminal(terminalcontainer) {
  const terminalContent = document.createElement("tempterminal1");
  terminalContent.innerHTML = `
  <div id="terminal">
  <div id="terminalLine">
    <p>root@<span style="color: teal">ZyFeronixOS</span>:~$</p>
    <div id="terminalInput">
      <input type="text">
    </div>
  </div>
</div>
        `;
  terminalcontainer.appendChild(terminalContent);
}

function terminal() {
  var terminalcontainer = document.getElementById("terminalcontent");
  //renderWelcome();

  setTimeout(() => {
    renderTerminal(terminalcontainer);
  }, 50);
}

function addEntryWithRandomDelay(index) {
  const entry = document.createElement("div");
  entry.classList.add("entry");
  entry.textContent = entries[index];
  container.appendChild(entry);

  container.scrollTop = container.scrollHeight;

  const randomDelay = Math.random() * (800 - 100) + 100;

  setTimeout(() => {
    if (index + 1 < entries.length) {
      addEntryWithRandomDelay(index + 1);
    } else {
      setTimeout(() => {
        container.style.display = "none";
        setTimeout(() => {
          terminal();
        }, 500);
      }, 2000);
    }
  }, randomDelay);
}

function startLoadingAnimation() {
  var container = document.getElementById("container");
  var content = document.getElementById("content");
  var functions = document.getElementById("functions");
  var loadingFill = document.getElementById("loading-fill");
  var loadingBar = document.getElementById("loading-bar");
  var animationDuration = Math.random() * (5 - 3) + 3;
  var numSteps = Math.floor(Math.random() * (50 - 2) + 2);
  var numJumps = Math.floor(numSteps / 2);
  var stepWidth = 100 / numSteps;
  var currentWidth = 0;

  container.style.display = "none";

  function animateStep() {
    currentWidth += stepWidth;
    if (currentWidth > 100) {
      currentWidth = 100;
    }
    loadingFill.style.width = currentWidth + "%";

    if (currentWidth < 100) {
      if (numJumps > 0 && Math.random() < 0.8) {
        numJumps--;
        setTimeout(
          animateJump,
          Math.random() * ((animationDuration * 1000) / numJumps)
        );
      } else {
        setTimeout(
          animateStep,
          Math.random() * ((animationDuration * 1000) / numSteps)
        );
      }
    } else {
      setTimeout(function () {
        content.style.display = "none";
        functions.style.display = "none";
        container.style.display = "block";
        addEntryWithRandomDelay(0);
      }, 1000);
    }
  }

  function animateJump() {
    var jumpWidth = Math.random() * (15 - 1) + 1;
    currentWidth += jumpWidth;
    if (currentWidth > 100) {
      currentWidth = 100;
    }
    loadingFill.style.width = currentWidth + "%";

    if (currentWidth < 100) {
      setTimeout(
        animateStep,
        Math.random() * ((animationDuration * 1000) / numSteps)
      );
    }
  }

  setTimeout(animateStep, 1000);
}

startLoadingAnimation();

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let response = await fetch(request);

  response = new Response(response.body, response);
  response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");

  return response;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".menu-dropdown").style.display = "block";
  });

  document.addEventListener("click", function (e) {
    if (!e.target.matches(".menu-btn")) {
      document.querySelector(".menu-dropdown").style.display = "none";
    }
  });

  document.querySelector(".menu-btn").addEventListener("click", function () {
    const menuDropdown = document.querySelector(".menu-dropdown");
    menuDropdown.classList.toggle("visible");
    menuDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (e) {
    const menuDropdown = document.querySelector(".menu-dropdown");
    const menuBtn = document.querySelector(".menu-btn");
    if (
      !menuBtn.contains(e.target) &&
      !menuDropdown.contains(e.target) &&
      menuDropdown.classList.contains("visible")
    ) {
      menuBtn.click();
    }
  });

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  document.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
      (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
      e.keyCode === 123
    ) {
      e.preventDefault();
    }
  });

  let headerElement = document.querySelector(".header-content");
  headerElement.style.opacity = 1;

  let fadeIns = document.querySelectorAll(".fade-in");
  let footerElement = document.querySelector(".footer");

  function fadeInElements() {
    fadeIns.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });

    if (isFooterInViewport()) {
      footerElement.classList.add("is-visible");
    } else {
      footerElement.classList.remove("is-visible");
    }
  }

  let currentImageIndex1 = 0;
  let currentImageIndex2 = 0;

  const images1 = document.querySelectorAll("#imageCarousel1 .carousel-item1");
  const images2 = document.querySelectorAll("#imageCarousel2 .carousel-item2");

  function showImage(images, index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function nextImage(images, currentIndex) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(images, currentIndex);
    return currentIndex;
  }

  function previousImage(images, currentIndex) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(images, currentIndex);
    return currentIndex;
  }

  function startCarousel(images, currentIndex) {
    showImage(images, currentIndex);
    setInterval(() => {
      currentIndex = nextImage(images, currentIndex);
    }, 5000);
  }

  startCarousel(images1, currentImageIndex1);
  startCarousel(images2, currentImageIndex2);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      currentImageIndex1 = nextImage(images1, currentImageIndex1);
      currentImageIndex2 = nextImage(images2, currentImageIndex2);
    } else if (event.key === "ArrowLeft") {
      currentImageIndex1 = previousImage(images1, currentImageIndex1);
      currentImageIndex2 = previousImage(images2, currentImageIndex2);
    } else if (event.key === "d") {
      currentImageIndex2 = nextImage(images2, currentImageIndex2);
      currentImageIndex2 = nextImage(images2, currentImageIndex2);
    } else if (event.key === "a") {
      currentImageIndex2 = previousImage(images2, currentImageIndex2);
      currentImageIndex2 = previousImage(images2, currentImageIndex2);
    }
  });

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return rect.top <= windowHeight && rect.bottom >= 0 && (rect.top >= 0 || rect.bottom > 0);
  }

  function isFooterInViewport() {
    let rect = footerElement.getBoundingClientRect();
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight;
  }

  fadeInElements();
  window.addEventListener("scroll", fadeInElements);

  var scrollButtons = document.querySelectorAll(".scroll-arrow");

  scrollButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetId = this.getAttribute("data-scroll-to");
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetOffset = targetElement.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetOffset - currentPosition;
        var duration = 2000;
        var startTime = performance.now();

        function scrollToTarget(currentTime) {
          var elapsedTime = currentTime - startTime;
          var easing = function (t) {
            return t * t * t * (t * (t * 6 - 15) + 10);
          }; // Easing function (cúbica)

          var percentage = Math.min(elapsedTime / duration, 1);
          var easedPercentage = easing(percentage);
          var step = distance * easedPercentage;
          window.scrollTo(0, currentPosition + step);
          if (elapsedTime < duration) {
            requestAnimationFrame(scrollToTarget);
          }
        }

        requestAnimationFrame(scrollToTarget);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let darkModeEnabled = localStorage.getItem("darkModeEnabled");

  if (darkModeEnabled === null) {
    localStorage.setItem("darkModeEnabled", false);
    darkModeEnabled = false;
  }

  function changeCSS() {
    let darkModeEnabled = localStorage.getItem("darkModeEnabled");
    const modeCSS = document.getElementById("modeCSS");
    if (darkModeEnabled === "true") {
      modeCSS.href = "./assets/css/styles.css";
    } else {
      modeCSS.href = "./assets/css/darkstyles.css";
    }
  }

  const input = document.querySelector(".input");

  setTimeout(() => {
    input.click();
    input.click();
    input.click();
  }, 10);
  input.checked = darkModeEnabled === "false";

  input.addEventListener("change", function () {
    if (this.checked) {
      changeCSS();
      localStorage.setItem("darkModeEnabled", true);
    } else {
      changeCSS();
      localStorage.setItem("darkModeEnabled", false);
    }
  });
  if (darkModeEnabled === "true") {
    changeCSS("./assets/css/darkstyles.css");
  } else {
    changeCSS("./assets/css/styles.css");
  }
});

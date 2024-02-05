document.addEventListener("DOMContentLoaded", function () {
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
  });
  
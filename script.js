window.addEventListener("scroll", () => {
  document.querySelectorAll(".page").forEach(el => {
    let pos = el.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (pos < screen - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
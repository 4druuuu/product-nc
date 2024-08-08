// Animation scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));

//auto fit DropDown
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown-neu");
  const button = dropdown.querySelector(".btn-neu");
  const panel = dropdown.querySelector(".dropdown-panel");
  const items = dropdown.querySelectorAll(".dropdown-item a");
  const offset = -110;

  button.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });

  items.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }

      panel.style.display = "none";
    });
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      panel.style.display = "none";
    }
  });
});

// Toggle DarkMode
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const iconMoon = document.querySelector(".icon-moon");
  const iconSun = document.querySelector(".icon-sun");

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  }

  const darkModeToggle = document.querySelector(".dark-1");
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      iconMoon.classList.add("hidden");
      iconSun.classList.remove("hidden");
    } else {
      localStorage.setItem("darkMode", "disabled");
      iconMoon.classList.remove("hidden");
      iconSun.classList.add("hidden");
    }
  });
});

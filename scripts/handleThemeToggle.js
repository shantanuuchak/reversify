// This function toggles the theme
function handleThemeToggle() {
  const currentTheme = document.documentElement.classList.contains("dark-mode")
    ? "dark"
    : "light";

  if (currentTheme === "dark") {
    document.documentElement.classList.remove("dark-mode");
    document.documentElement.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.remove("light-mode");
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
}

// Immediately apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
  } else {
    // If no theme is saved, let the system preference decide
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkScheme) {
      document.documentElement.classList.add("dark-mode");
    }
  }
});

export default handleThemeToggle;

// ====== JavaScript for Interactive Features ======

// Change Theme Color
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Update button text based on mode
    const themeButton = document.getElementById("theme-toggle");
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
}

// Add Event Listener to the Theme Toggle Button
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.createElement("button");
    themeButton.id = "theme-toggle";
    themeButton.textContent = "Dark Mode";
    themeButton.style.position = "fixed";
    themeButton.style.top = "10px";
    themeButton.style.right = "10px";
    themeButton.style.padding = "10px 20px";
    themeButton.style.backgroundColor = "#6200ea";
    themeButton.style.color = "#fff";
    themeButton.style.border = "none";
    themeButton.style.borderRadius = "5px";
    themeButton.style.cursor = "pointer";
    themeButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", toggleTheme);
});

// Smooth Scroll to Sections
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").replace(".html", "");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

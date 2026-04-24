// Theme system
function setTheme(mode) {

    if (mode === "dark") {
        document.body.style.background = "#0f172a";
        document.body.style.color = "white";
        localStorage.setItem("theme", "dark");
    }

    if (mode === "light") {
        document.body.style.background = "white";
        document.body.style.color = "black";
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
window.onload = function () {
    let theme = localStorage.getItem("theme");

    if (theme === "light") {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}

// Notification toggle
document.getElementById("notify").addEventListener("change", function () {
    alert("Notification setting updated: " + this.checked);
});
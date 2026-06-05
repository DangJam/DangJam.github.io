const button = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

button.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});
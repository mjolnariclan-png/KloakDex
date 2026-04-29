document.addEventListener("DOMContentLoaded", () => {
    loadSidebar();
});

function loadSidebar() {
    fetch('sidebar/sidebar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            setupSidebarToggle();
        });
}

function setupSidebarToggle() {
    const btn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");

    if (!btn || !sidebar) return;

    // Restore saved state
    if (localStorage.getItem("sidebarCollapsed") === "true") {
        sidebar.classList.add("collapsed");
    }

    btn.onclick = () => {
        sidebar.classList.toggle("collapsed");

        // Save state
        localStorage.setItem(
            "sidebarCollapsed",
            sidebar.classList.contains("collapsed")
        );
    };
}
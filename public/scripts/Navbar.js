// Navbar Generator
function renderNavbar(activePage) {

    const links = [
        { name: "Home", file: "index.html" },
        { name: "About", file: "About.html" },
        { name: "Short Films", file: "Short-Films.html" },
        { name: "Broadcasting", file: "Broadcasting.html" },
        { name: "Music Videos", file: "Music-Videos.html" },
        { name: "Promos & Trailers", file: "Promos-&-Trailers.html" },
        { name: "Photography", file: "Photography.html" },
        { name: "More Projects", file: "More-Projects.html" }
    ];

    let navItems = "";

    links.forEach(link => {
        const isActive = link.name === activePage;

        navItems += `
        <li class="nav-item">
            <a class="nav-link ${isActive ? "active" : "text-white"}"
               style="font-size: 1.2rem; ${isActive ? "color:#7baadf;" : ""}"
               href="${link.file}">
                ${link.name}
            </a>
        </li>`;
    });

    const navbarHTML = `
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
        <div class="container-fluid">

            <a class="navbar-brand"
               style="color:#3585e1; font-size:1.5rem;">
                Austin Preston
            </a>

            <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${navItems}
                </ul>
            </div>

        </div>
    </nav>
    `;

    document.getElementById("navbarContainer").innerHTML = navbarHTML;
}
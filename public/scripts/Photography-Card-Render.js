// Card Generation
let carouselCounter = 0;

// Function to create a card with a carousel of images
function createCard({ title, description, images, link }) {
    carouselCounter++;
    const carouselId = "carousel" + carouselCounter;

    let slides = "";
    images.forEach((img, index) => {
        slides += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${img}"
                class="d-block w-100 card-img-top"
                loading="lazy"
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
                onclick="setModalImage(this.src)">
        </div>`;
    });

    const cardHTML = `
    <div class="col">
        <div class="card bg-dark text-white">

            <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${slides}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>

            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${link}" class="btn btn-light text-dark">View all Images</a>
            </div>

        </div>
    </div>
    `;

    document.getElementById("cardContainer").insertAdjacentHTML("beforeend", cardHTML);
}

// Function to set the image
function setModalImage(src) {
    document.getElementById("modalImage").src = src;
}

document.addEventListener('slide.bs.carousel', function (e) {
    const imgs = e.target.querySelectorAll('.lazy-carousel');
    imgs.forEach(img => {
        if (img.dataset.src && !img.src) {
            img.src = img.dataset.src;
        }
    });
})

// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {

    // Create cards
        createCard({
        title: "FateXY - Live at The Coda 04/18/26",
        description: "Victoria, BC",
        images: [
            "images/FateXY Coda/FateXY Coda 04182026 (19).png",
            "images/FateXY Coda/FateXY Coda 04182026 (1).png",
            "images/FateXY Coda/FateXY Coda 04182026 (3).png",
            "images/FateXY Coda/FateXY Coda 04182026 (4).png",
            "images/FateXY Coda/FateXY Coda 04182026 (5).png",
            "images/FateXY Coda/FateXY Coda 04182026 (6).png",
            "images/FateXY Coda/FateXY Coda 04182026 (7).png",
            "images/FateXY Coda/FateXY Coda 04182026 (2).png",
            "images/FateXY Coda/FateXY Coda 04182026 (8).png",
            "images/FateXY Coda/FateXY Coda 04182026 (9).png",
            "images/FateXY Coda/FateXY Coda 04182026 (10).png",
            "images/FateXY Coda/FateXY Coda 04182026 (11).png",
            "images/FateXY Coda/FateXY Coda 04182026 (12).png",
            "images/FateXY Coda/FateXY Coda 04182026 (13).png",
            "images/FateXY Coda/FateXY Coda 04182026 (14).png",
            "images/FateXY Coda/FateXY Coda 04182026 (15).png",
            "images/FateXY Coda/FateXY Coda 04182026 (16).png",
            "images/FateXY Coda/FateXY Coda 04182026 (17).png",
            "images/FateXY Coda/FateXY Coda 04182026 (18).png",
            "images/FateXY Coda/FateXY Coda 04182026 (20).png",
            "images/FateXY Coda/FateXY Coda 04182026 (21).png"
        ],
        link: "FateXY-Coda.html"
    });

    createCard({
        title: "Ferry",
        description: "Between Nanaimo and Vancouver",
        images: [
            "images/Ferry/Ferry_00_00_10_00.jpg",
            "images/Ferry/Ferry_00_00_15_00.jpg",
            "images/Ferry/Ferry_00_00_25_00.jpg",
            "images/Ferry/Ferry_00_00_30_00.jpg",
            "images/Ferry/Ferry_00_01_10_00.jpg"
        ],
        link: "Ferry-Photography.html"
    });

    createCard({
        title: "Fraserview",
        description: "Vancouver, BC",
        images: [
            "images/Fraserview/Timeline 1_00_00_00_00.jpg",
            "images/Fraserview/Timeline 1_00_00_05_00.jpg",
            "images/Fraserview/Timeline 1_00_00_10_00.jpg",
            "images/Fraserview/Timeline 1_00_00_15_00.jpg"
        ],
        link: "Fraserview-Photography.html"
    });

    createCard({
        title: "Granville / Gastown",
        description: "Vancouver, BC",
        images: [
            "images/Granville Gastown/Timeline 5_00_00_00_00.jpg",
            "images/Granville Gastown/Timeline 5_00_00_05_00.jpg",
            "images/Granville Gastown/Timeline 5_00_00_16_00.jpg",
            "images/Granville Gastown/Timeline 5_00_00_21_08.jpg"
        ],
        link: "Granville-Gastown-Photography.html"
    });

    createCard({
        title: "FateXY - Live at Take Your Time Back 01/30/26",
        description: "Vancouver, BC",
        images: [
            "images/FateXY/FateXY 01-30-26 (1).jpg",
            "images/FateXY/FateXY 01-30-26 (2).jpg",
            "images/FateXY/FateXY 01-30-26 (3).jpg",
            "images/FateXY/FateXY 01-30-26 (4).jpg",
            "images/FateXY/FateXY 01-30-26 (5).jpg",
            "images/FateXY/FateXY 01-30-26 (6).jpg",
            "images/FateXY/FateXY 01-30-26 (7).jpg",
            "images/FateXY/FateXY 01-30-26 (8).jpg",
            "images/FateXY/FateXY 01-30-26 (9).jpg",
            "images/FateXY/FateXY 01-30-26 (10).jpg",
            "images/FateXY/FateXY 01-30-26 (11).jpg",
            "images/FateXY/FateXY 01-30-26 (12).jpg",
            "images/FateXY/FateXY 01-30-26 (13).jpg",
            "images/FateXY/FateXY 01-30-26 (14).jpg",
            "images/FateXY/FateXY 01-30-26 (15).jpg",
            "images/FateXY/FateXY 01-30-26 (16).jpg",
            "images/FateXY/FateXY 01-30-26 (17).jpg",
            "images/FateXY/FateXY 01-30-26 (18).jpg",
            "images/FateXY/FateXY 01-30-26 (19).jpg",
            "images/FateXY/FateXY 01-30-26 (20).jpg",
            "images/FateXY/FateXY 01-30-26 (21).jpg",
            "images/FateXY/FateXY 01-30-26 (22).jpg"
        ],
        link: "FateXY-Take-Your-Time-Back-Photography.html"
    });

     createCard({
        title: "Roxy Rollers - Live at The Roxy Cabarnet 01/13/26",
        description: "Vancouver, BC",
        images: [
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (1).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (2).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (3).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (4).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (5).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (6).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (7).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (8).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (9).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (10).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (11).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (12).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (13).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (14).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (15).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (16).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (17).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (18).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (19).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (20).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (21).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (22).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (23).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (24).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (25).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (26).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (27).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (28).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (29).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (30).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (31).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (32).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (33).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (34).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (35).jpg",
            "images/Roxy Rollers 01-13-26/RoxyRollers_01-13-26 (36).jpg"
        ],
        link: "Roxy-Rollers-01-13-26-Photography.html"
    });

        createCard({
        title: "New Years Eve 2025",
        description: "Vancouver, BC",
        images: [
            "images/New Years Eve 2025/DSC00002 (81).HIF Render_00000480.jpg",
            "images/New Years Eve 2025/DSC00002 (91).HIF Render_00000120.jpg",
            "images/New Years Eve 2025/DSC00002 (98).HIF Render_00000240.jpg",
            "images/New Years Eve 2025/DSC00002 (103).HIF Render_00000360.jpg",
            "images/New Years Eve 2025/DSC00002 (111).HIF Render_00000996.jpg",
            "images/New Years Eve 2025/DSC00002 (116).HIF Render_00000000.jpg",
            "images/New Years Eve 2025/Timeline 2_00_00_25_00.jpg",
            "images/New Years Eve 2025/Timeline 2_00_00_27_14.jpg"
        ],
        link: "New-Years-Eve-2025-Photography.html"
    });

    // Check scroll position
    setTimeout(() => {
        checkScroll();
    }, 0);
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Function to check scroll position and add 'visible' class to cards in viewport
function checkScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScroll, 100);
});

window.addEventListener('load', checkScroll);
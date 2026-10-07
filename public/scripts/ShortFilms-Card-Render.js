const cards = [
    {
        title: "Ring - Short Film",
        text: "Compositor <br> 255 Productions",
        img: "images/ring_thumbnail.jpg",
        link: "https://www.instagram.com/255productions/?fbclid=IwY2xjawIklu5leHRuA2FlbQIxMAABHXoiOpV0VQD2M4OoVYRAVB0Zlox_DbEOR16Bo6DJ-5eDNbv2GnH-hbNO3g_aem_F_8CoyrApc5mjD7aMwgLuw"
    },
    {
        title: "Untitled Artboard - Short Film",
        text: "Director, Cinematographer, Editor, VFX, Colour, Writer",
        img: "images/Untitled Artboard Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=p1AqCQk_oVI"
    },
    {
        title: "Same Old, Same Old | SModcastle 37 Hour Film Challenge",
        text: "Director, Producer, Writer, Editor, VFX, Cinematographer",
        img: "images/same old same old thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=V9iqMFMRPBQ"
    },
    {
        title: "Test Chamber 00 - Portal Inspired Short Film",
        text: "Director, Cinematographer, Editor, VFX",
        img: "images/Test Chamber 00 Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=6r-EkfBeJf8"
    },
    {
        title: "Disconnected Reality | 48 Hour Film Challenge Short Film",
        text: "Assistant Director, Editor, Writer",
        img: "images/Disconnected Reality Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=47egzPbqQtY"
    },
    {
        title: "Think - Short Film",
        text: "VFX",
        img: "images/think_thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=fzoQhUys1j4"
    },
    {
        title: "Mercurial - Short Experimental Film",
        text: "Director, Cinematographer, Editor, Sound Design",
        img: "images/Mercurial Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=nFOaxkq5Ri0"
    }
];

function renderCards() {
    const container = document.getElementById("card-container");

    container.innerHTML = cards.map(card => `
        <div class="col">
            <div class="card bg-dark text-white h-100">
                <img src="${card.img}" 
                     class="card-img-top"
                     style="width: 100%; aspect-ratio: 16 / 9; object-fit: contain; background-color: black;" />

                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.text}</p>
                    <a href="${card.link}" class="btn btn-light text-dark" target="_blank">
                        Visit Link
                    </a>
                </div>
            </div>
        </div>
    `).join("");
}

renderCards();
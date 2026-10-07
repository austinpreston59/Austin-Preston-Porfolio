const cards = [
    {
        title: "Projection Mapping Demo",
        text: "Compositor",
        img: "images/Projection Mapping Demo Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=Ek6n5eAxXKg"
    },
    {
        title: "Parkour Montage",
        text: "Editor | Footage Provided by Editstock",
        img: "images/Parkour Montage Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=SWD3mKKfcN8"
    },
    {
        title: "Guide Dogs - Bio Interview",
        text: "Director, Editor",
        img: "images/Guide Dogs Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=fFz60aWk7Vc"
    },
    {
        title: "Downtown London Montage",
        text: "Cinematographer, Editor",
        img: "images/Downtown London Montage Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=RJRhjgYg_FQ"
    },
    {
        title: "Light Exploration",
        text: "Director, Cinematographer, Lighting",
        img: "images/Light Exploration Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=1LTe8Os3pVE"
    },
    {
        title: "DERO: My Life: a Talk with Dwayne De Rosario | CIBC & DERO",
        text: "Editor, Motion Graphics <br> Glo Up Program",
        img: "images/dero my life and freelance thumbnail.jpg",
        link: "https://drive.google.com/file/d/1rLWrdo4rgZjEtIarCG-bxiqhFTTUvpPX/view?usp=sharing"
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

                    <a href="${card.link}"
                       class="btn btn-light text-dark"
                       target="_blank">
                        Visit Link
                    </a>
                </div>

            </div>
        </div>
    `).join("");
}

renderCards();
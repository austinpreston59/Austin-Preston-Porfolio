const cards = [
    {
        title: "Connor Elgie - Autumn's Drowning (feat. Madi Jay) | Official Music Video",
        text: "Director, Cinematographer, Editor, Compositor, Colourist",
        img: "images/Autumn's Drowning Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=VqC5EavLyjY"
    },
    {
        title: "Controlled Strum - Tyler DeLargie (Lyric Video)",
        text: "Motion Graphics",
        img: "images/Controlled Strum Thumbnail.jpg",
        link: "https://youtu.be/K3M6VoJ0_WI?si=YBSkFP5eDNP5gURQ"
    },
    {
        title: "Kelvyn Boy - Down Flat | Live at Flavours and Vibes",
        text: "Editor, Motion Graphics <br> Glo Up Program",
        img: "images/Kelvyn boy down flat.jpg",
        link: "https://www.instagram.com/reel/CsKRcVKgtq5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        title: "Nothing But Thieves - Unperson | Animated Lyric Video",
        text: "Motion Graphics",
        img: "images/Unperson Lyric Video Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=VbZ_TBGODfU"
    },
    {
        title: "Metric - Suckers | Animated Lyric Video Demo",
        text: "Motion Graphics",
        img: "images/Suckers Lyric Video Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=0Gaskd28mos"
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
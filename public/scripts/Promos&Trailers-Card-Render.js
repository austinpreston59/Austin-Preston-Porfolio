const cards = [
    {
        title: "4 Days of LOOM Event",
        text: "Editor, Motion Graphics <br> Imagine Dragons Official Discord",
        img: "images/4 days of loom.jpg",
        link: "https://www.instagram.com/reel/C8k3dAfSX5Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        title: "FateXY - Live at The Coda BTS",
        text: "Cinematographer, Editor <br> FateXY",
        img: "images/fatexy bts.jpg",
        link: "https://www.instagram.com/p/DXkRLjfDzef/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        title: "Unbound 2024 Designer Profile Reels",
        text: "Project Lead, Production",
        img: "images/Unbound Designer Profiles Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=x-9ISgk5-7c"
    },
    {
        title: "Earn Your Leisure Market Mondays Toronto Highlights Reel",
        text: "Editor, Additional Motion Graphics <br> Glo Up Program",
        img: "images/market mondays highlight reel.jpg",
        link: "https://www.instagram.com/reel/CrjWyy4JYgp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        title: "Earn Your Leisure Market Mondays Toronto BTS Reel",
        text: "Editor, Additional Motion Graphics <br> Glo Up Program",
        img: "images/market mondays BTS.jpg",
        link: "https://drive.google.com/file/d/1ToLprvJaY8ZqC95Nshbh21zuWiqoXuu0/view?usp=sharing"
    },
    {
        title: "GloUp Highlight Reel",
        text: "Editor, Motion Graphics <br> Glo Up Program",
        img: "images/glo up highlight reel 2.jpg",
        link: "https://www.instagram.com/reel/C2xDFJ6yFmz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        title: "Watch Party Event Announcement",
        text: "Editor <br> Imagine Dragons Official Discord",
        img: "images/ID discord watch party.jpg",
        link: "https://drive.google.com/file/d/1UGzzaQXBJPWzkIWhWELrDA1VwPeQxWJb/view?usp=sharing"
    },
    {
        title: "Ommetaphobia - Trailer",
        text: "Director, Editor, Writer",
        img: "images/Ommetaphobia.jpg",
        link: "https://www.youtube.com/watch?v=Br1XPxS0e0Y"
    },
    {
        title: "Anesthesia - Classic Horror Trailer",
        text: "Editor, VFX | Footage Provided by Editstock",
        img: "images/Anesthesia Trailer Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=6gkma2tSm_E"
    },
    {
        title: "Vicious Circle - Commercial Demo",
        text: "Editor",
        img: "images/Vicious Circle.jpg",
        link: "https://www.youtube.com/watch?v=6IW7NEp233U"
    },
    {
        title: "Eldertronics Commercial (90s, 30s, 15s)",
        text: "Director, Cinematographer, Editor",
        img: "images/Eldertronics Commercial Thumbnail.jpg",
        link: "https://www.youtube.com/watch?v=LerKW5tej9A"
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
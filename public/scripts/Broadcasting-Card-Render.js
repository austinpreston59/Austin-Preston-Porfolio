const cards = [
    {
        title: "BCFC VI Raiders vs Westshore Rebels - Nanaimo, BC - 09/20/2025",
        text: "Camera Operator <br> Roll.Focus.",
        img: "images/football3.png",
        link: "https://youtu.be/bBGW7hAsuHk?si=_6cMojzNXUIerdDm"
    },   

    {
        title: "Volleybash 2025 – Live Women’s and Men’s Double Championships",
        text: "Camera Operator <br> Rogers TV",
        img: "images/volleybash.jpg",
        link: "youtube.com/live/Lizip52T72U?si=wVoK8ifIZd17cOLY"
    },    

    {
        title: "BCFC VI Raiders vs PG Kodiaks - Nanaimo, BC - 08/30/2025",
        text: "Camera Operator <br> Roll.Focus.",
        img: "images/football2.png",
        link: "https://www.youtube.com/watch?v=qKIYYkAv_FY"
    },    

    {
        title: "BCFC VI Raiders vs Westshore Rebels - Nanaimo, BC - 08/16/2025",
        text: "Camera Operator <br> Roll.Focus.",
        img: "images/football1.png",
        link: "https://www.youtube.com/watch?v=47L5j-N2Cj0"
    },    
    
    {
        title: "VIPW Wrestlefest 2",
        text: "Camera Operator <br> Rogers TV",
        img: "images/wrestlefest.jpg",
        link: "https://www.youtube.com/live/4IYOkaDWjiw?si=Jn5dLrmvKzMOy8dU"
    },
    {
        title: "BC Junior A Lacrosse League - Victoria Shamrocks vs Nanaimo Timbermen - 06/12/2025",
        text: "Camera Operator <br> Rogers TV",
        img: "images/lacrosse.jpg",
        link: "https://www.youtube.com/live/5GIw1SDJgj4?si=Aoq1NTdqJuI8tTWI"
    },
    {
        title: "2025 VIMX Championship Series",
        text: "Camera Operator <br> Rogers TV",
        img: "images/2025-VIMX-Champions.png",
        link: "https://www.youtube.com/live/JwO1mD7GgYg?si=ljEoVGtdukya6-s2"
    },
    {
        title: "U Sports Men's Basketball Championships Final - Victoria Vikes vs Calgary Dinos",
        text: "Audio Operator, Production Assistant <br> CBC Sports, Roll.Focus.",
        img: "images/U Sports Thumbnail.jpg",
        link: "https://www.youtube.com/live/vTy5zajgS48?si=iL9CcF3ti3uB5H9M"
    },
    {
        title: "2024 Canadian University Rowing Championships",
        text: "Graphics Operator, Production Assistant <br> Roll.Focus.",
        img: "images/Rowing championshiop Thumbnail.jpg",
        link: "https://www.youtube.com/live/1oFltVCHMbM"
    },
    {
        title: "WHL - Victoria Royals Games",
        text: "Switcher Board Operator <br> SW Event Technology",
        img: "images/Royals Thumbnail.jpg",
        link: null
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

                    ${
                        card.link
                        ? `<a href="${card.link}" class="btn btn-light text-dark" target="_blank">Visit Link</a>`
                        : `<a class="btn btn-light text-dark invisible" style="pointer-events: none;">Visit Link</a>`
                    }

                </div>
            </div>
        </div>
    `).join("");
}

renderCards();
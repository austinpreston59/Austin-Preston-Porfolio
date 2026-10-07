function renderFooter() {
    const footerHTML = `
        <style>
            .footer-content {
                background: inherit;
            }

            .contact-info {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 12px;
            }

            .contact-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 16px;
                border-radius: 10px;

                color: #ddd;
                text-decoration: none;

                transition: all 0.2s ease;
                white-space: nowrap;
            }

            .contact-item i {
                font-size: 1.2rem;
            }

            .contact-item:hover {
                background: rgba(255, 255, 255, 0.05);
                color: #fff;
                transform: translateY(-2px);
            }

            .footer-credit {
                color: #aaa;
                text-decoration: none;
                transition: 0.2s;
            }

            .footer-credit:hover {
                color: #fff;
            }
        </style>

        <div class="footer-content text-center py-5">

            <h2 class="mb-4 fw-semibold">Contact</h2>

            <div class="contact-info">

                <a href="https://www.linkedin.com/in/austin-preston-44a8a3240/"
                   class="contact-item"
                   target="_blank">
                    <i class="bi bi-linkedin"></i>
                    <span>Austin Preston</span>
                </a>

                <a href="mailto:austin.preston.59@gmail.com"
                   class="contact-item">
                    <i class="bi bi-envelope-fill"></i>
                    <span>austin.preston.59@gmail.com</span>
                </a>

                <a href="tel:2509513963"
                   class="contact-item">
                    <i class="bi bi-telephone-fill"></i>
                    <span>(250) 951-3963</span>
                </a>

                <a href="https://www.instagram.com/a_prestoncreative/"
                   class="contact-item"
                   target="_blank">
                    <i class="bi bi-instagram"></i>
                    <span>@a_prestoncreative</span>
                </a>

            </div>

            <div class="mt-5 small text-secondary">
                © 2026 Built by: 
                <a href="https://www.samuelfaseruk.com/" class="footer-credit">
                    Samuel Faseruk
                </a>
            </div>

        </div>
    `;

    document.getElementById("footerContainer").innerHTML = footerHTML;
}

document.addEventListener("DOMContentLoaded", renderFooter);
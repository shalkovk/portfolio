document.addEventListener("DOMContentLoaded", function () {
    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");
    var links = document.querySelector(".navlinks li");

    if (togglebtn && nav) {
        togglebtn.addEventListener("click", function(){
            this.classList.toggle("click");
            nav.classList.toggle("open");
        });
    }

    const inputElement = document.querySelector(".input");
    if (inputElement) {
        var typed = new Typed(".input", {
            strings: ["Backend Developer", "DevOps Engineer"],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.querySelector(".close-btn");

    if (btn && modal && span) {
        btn.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    const heroContactBtn = document.querySelector(".trigger-modal-from-hero");
    const navContactBtn = document.getElementById("openModalBtn");

    if (heroContactBtn && navContactBtn) {
        heroContactBtn.addEventListener("click", function (e) {
            e.preventDefault();
            navContactBtn.click();
        });
    }
});

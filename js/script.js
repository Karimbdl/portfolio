let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })

        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}


/* Fonction pour afficher le texte supplémentaire lorsque le bouton est cliqué */
function showMore() {
    var moreText = document.getElementById("moreText");
    var btn = document.querySelector(".btn");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";

    }
}


function getMore() {
    var More = document.getElementById("plus");
    if (More.style.display === "none") {
        More.style.display = "block";
    } else {
        More.style.display = "none";
    }
}

function lirePlus() {
    var lire = document.getElementById('lire');
    if (lire.style.display === "none") {
        lire.style.display = 'block';

    } else {
        lire.style.display = "none"
    }
}
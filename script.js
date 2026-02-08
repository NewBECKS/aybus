/* Sürpriz */
function surpriz() {
    document.getElementById("surpriz-mesaj").innerText =
        "İyi ki varsın Büşranur… Seni çok seviyorum ❤️";
}

/* Foto büyütme */
function buyut(img) {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
}
function kapat() {
    document.getElementById("lightbox").style.display = "none";
}

/* Müzik */
let muzikCalıyor = false;
function muzikBaslat() {
    const muzik = document.getElementById("bg-music");
    const btn = document.querySelector(".muzik-btn");

    if (!muzikCalıyor) {
        muzik.play();
        btn.innerText = "⏸ Müziği Durdur";
        muzikCalıyor = true;
    } else {
        muzik.pause();
        btn.innerText = "🎶 Müziği Aç";
        muzikCalıyor = false;
    }
}

/* Arka plan kalpleri */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 3) + "s";
    document.getElementById("heart-layer").appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}
// script.js
let kalpInterval = setInterval(createHeart, 900);

/* Final yazı */
const finalYazi =
"Büşranur…||" +
"Bu site bitebilir ama|" +
"sana olan sevgim hiç bitmez ❤️||" +
"Sonsuza kadar…";

let yaziIndex = 0;
let yaziInterval = null;

function finalAc() {
    const modal = document.getElementById("final-modal");
    const metin = document.getElementById("final-metin");
    const muzik = document.getElementById("bg-music");

    modal.style.display = "flex";
    metin.innerHTML = "";
    yaziIndex = 0;

    clearInterval(kalpInterval);
    if (!muzik.paused) muzik.volume = 0.3;

    yaziInterval = setInterval(() => {
        if (yaziIndex < finalYazi.length) {
            const karakter = finalYazi.charAt(yaziIndex);
            metin.innerHTML += karakter === "|" ? "<br>" : karakter;
            yaziIndex++;
        } else {
            clearInterval(yaziInterval);
            kalpPatlamasi();
        }
    }, 70);
}

function finalKapat() {
    document.getElementById("final-modal").style.display = "none";
    clearInterval(yaziInterval);
    kalpInterval = setInterval(createHeart, 600);

    const muzik = document.getElementById("bg-music");
    if (!muzik.paused) muzik.volume = 1;
}

/* Kalp patlaması */
function kalpPatlamasi() {
    for (let i = 0; i < 26; i++) {
        const heart = document.createElement("div");
        heart.className = "explosion-heart";
        heart.innerText = "❤️";

        heart.style.setProperty("--x", (Math.random() - 0.5) * 420 + "px");
        heart.style.setProperty("--y", (Math.random() - 0.5) * 420 + "px");

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2600);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".certificate-track");

    if (track) {
        const originalItems = Array.from(track.children);

        originalItems.forEach(function (item) {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

});

// MENU MOBILE
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
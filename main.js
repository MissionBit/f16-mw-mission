document.addEventListener("DOMContentLoaded", function() {
    var imgs = [
        "http://media.giphy.com/media/TsxMkIKHpvFaU/giphy.gif",
        "https://media.giphy.com/media/s0z685OFhWyuk/giphy.gif",
        "https://media.giphy.com/media/4nRiHFFTzmJZC/giphy.gif",
        "https://media.giphy.com/media/Fbyam9ZAJ3J1m/giphy.gif",
        "https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif",
        "https://media.giphy.com/media/ZIqbJ5Tbm6N0I/giphy.gif",
        "https://media.giphy.com/media/qKltgF7Aw515K/giphy.gif",
        "https://media.giphy.com/media/sRWf3Oa9vW6Xu/giphy.gif"
    ];

    var url = imgs[Math.floor(Math.random() * imgs.length)];
    var container = document.getElementById("img_container");
    var img = document.createElement("img");
    img.src = url;
    img.width = 512;
    container.appendChild(img);
});

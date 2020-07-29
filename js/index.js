const icon = document.querySelector(".card__share");
const icon2 = document.querySelector(".card__shareActive .card__share");
const popup = document.getElementById("share-popup");

icon.addEventListener('click', function() {
    popup.classList.toggle("card__shareHidden");
})

icon2.addEventListener('click', function() {
    popup.classList.toggle("card__shareHidden");
})


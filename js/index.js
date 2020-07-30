const icon = document.querySelector(".card__share");
const iconActive = document.querySelector(".card__shareActive .card__share");
const popup = document.getElementById("share-popup");
const triangle = document.querySelector(".triangle");

icon.addEventListener('click', function() {
    popup.classList.toggle("card__shareHidden");
    
    if (!popup.matches(".card__shareHidden")) {
        triangle.classList.toggle("triangle__hidden");
    } else {
        triangle.classList.toggle("triangle__hidden");
    }
})

iconActive.addEventListener('click', function() {
    popup.classList.toggle("card__shareHidden");
})


const toggleBtn = document.querySelector(".navbar-toggleBtn");
const list = document.querySelector(".navbar-list");
const icons = document.querySelector(".navbar-icons");


toggleBtn.addEventListener("click", function () {
    list.classList.toggle("active");
    icons.classList.toggle("active");
});


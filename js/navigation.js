const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if(menu){
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
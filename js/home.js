const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 500);
})

let menu = document.querySelector('.menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('close-icon');
    navlist.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("show-more").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("br").scrollIntoView({
            behavior: 'smooth'
        });
    });
});
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

function goToDetailPage(url) {
    window.location.href = url;
}
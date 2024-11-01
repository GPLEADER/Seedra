// sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener('load', () => {
    const clientCards = document.querySelector('.client-cards');
    clientCards.scrollLeft = (clientCards.scrollWidth - clientCards.clientWidth) / 2;
});
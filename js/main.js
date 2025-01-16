let burgerBtn = document.querySelector('.burger-menu-button');
let burgerMenu = document.querySelector('.burger-menu');
let burgerProceduresBtn = document.querySelector('.burger-menu_procedures-button');
let burgerProceduresDropdown = document.querySelector('.burger-menu_procedures-dropdown');

let isBurgerOpen = false;
let isProceduresOpen = false;

function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = 'visible';
}

// window.onscroll = () => {
//     console.log(window.scrollY);
// }
window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
})
window.addEventListener("keydown", (event) => {
    window.scrollTo(0, 1000);
});

burgerBtn.onclick = function() {
    if (!isBurgerOpen) {
        scrollDistance = window.scrollY;
        burgerMenu.style.display = 'block';
        burgerMenu.style.position = 'fixed';
        burgerBtn.style.backgroundPosition = 'center left 50px, center';
        isBurgerOpen = true;
        disableScroll();
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = 'none';
        burgerBtn.style.backgroundPosition = 'center, center left 50px';
        isBurgerOpen = false;
        burgerProceduresDropdown.style.display = 'none';
        isProceduresOpen = false;
        enableScroll();
        window.scrollTo(0, scrollDistance);
    }
}

burgerProceduresBtn.onclick = function() {
    if (!isProceduresOpen) {
        burgerProceduresDropdown.style.display = 'flex';
        isProceduresOpen = true;

    }
    else if (isProceduresOpen) {
        burgerProceduresDropdown.style.display = 'none';
        isProceduresOpen = false;
    }
}


let burgerBtn = document.querySelector('.burger-menu-button');
let burgerMenu = document.querySelector('.burger-menu');
let burgerProceduresBtn = document.querySelector('.burger-menu_procedures-button');
let burgerProceduresDropdown = document.querySelector('.burger-menu_procedures-dropdown');

let isBurgerOpen = false;
let isProceduresOpen = false;

burgerBtn.onclick = function() {
    if (!isBurgerOpen) {
        burgerMenu.style.display = 'block';
        burgerBtn.style.backgroundPosition = 'center left 50px, center';
        isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = 'none';
        burgerBtn.style.backgroundPosition = 'center, center left 50px';
        isBurgerOpen = false;
    }
}

burgerProceduresBtn.onclick = function() {
    if (!isProceduresOpen) {
        burgerProceduresDropdown.style.display = 'block';
        isProceduresOpen = true;

    }
    else if (isProceduresOpen) {
        burgerProceduresDropdown.style.display = 'none';
        isProceduresOpen = false;
    }
}
(function() {
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 80) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Buger header

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    // console.log(burgerItem);
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
        // console.log(1)
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
        // console.log(1)
    });
}())
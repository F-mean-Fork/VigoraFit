(() => {
    const header = document.querySelector('.header');
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const burgerLinks = document.querySelectorAll('.header_link');
  
    window.onscroll = () => {
      header.classList.toggle('header_active', document.documentElement.scrollTop > 80);
    };
  
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header_nav_active');
    });
  
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header_nav_active');
    });
  
    burgerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const isAnchorLink = targetId.startsWith('#');
  
        if (isAnchorLink) {
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = targetId;
        }
  
        menu.classList.remove('header_nav_active');
      });
    });
})();
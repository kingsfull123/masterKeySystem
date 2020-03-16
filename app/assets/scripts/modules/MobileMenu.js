class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.siteHeader = document.querySelector('.site-header--is-expanded');
        this.middleFunc();
    }

    middleFunc () {
        this.menuIcon.addEventListener('click', () => this.toggleContent())
    }

    toggleContent () {
        this.menuContent.classList.toggle('site-header__menu-content--is-visible')
        this.menuContent.classList.toggle('site-header--is-expanded')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }
}

export default MobileMenu;
class RevealOnScroll  {
    constructor () {
        this.itemToReveal = document.querySelectorAll('.features-section');
        this.hideInitally()
    }

    hideInitally () {
        this.itemToReveal.forEach(el => {
            el.classList.add('reveal-item')
        })
    }
}

export default RevealOnScroll;
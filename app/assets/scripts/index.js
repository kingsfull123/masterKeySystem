import '../styles/styles.css';


const block = document.getElementById('block');

const listing = document.getElementById('listing');

let isToggled = false;

block.onclick = function() {
    isToggled = !isToggled;
    if(isToggled) {
        listing.classList.remove('site-header__display')
    } else {
        listing.classList.add('site-header__display')
    }
}
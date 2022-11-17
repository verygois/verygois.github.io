const button = document.querySelector('#js-button');
const nav = document.querySelector('#js-nav');
const box = document.querySelector('body');

button.addEventListener('click', function () {
    button.classList.toggle('active');
    nav.classList.toggle('active');
    box.classList.toggle('open');
});

const menuCSS = document.createElement( "link" );
menuCSS.href = "/menu/index.css";
menuCSS.type = "text/css";
menuCSS.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(menuCSS);

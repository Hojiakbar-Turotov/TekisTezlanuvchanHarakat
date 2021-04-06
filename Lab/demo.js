const balandlik = document.getElementById('balandlik');
const uzunlik = document.getElementById('uzunlik');

const height = document.getElementById('height');
const width = document.getElementById('qiyaTekislik');

balandlik.onkeyup = function() {
    height.style.height = balandlik.value + 'px';
}


const onesection = document.getElementById('onesection');
uzunlik.onkeyup = function() {
    width.style.width = uzunlik.value + 'px';
}
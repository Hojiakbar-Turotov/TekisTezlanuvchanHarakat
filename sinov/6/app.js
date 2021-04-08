const chiziqy = document.querySelector('#chiziqy');
const chiziqx = document.querySelector('#chiziqx');
const chiziqs = document.querySelector('#chiziqs');
const sharcha = document.querySelector('#sharcha');

const qiymaty = document.querySelector('#qiymaty');
const qiymatx = document.querySelector('#qiymatx');
const qiymats = document.querySelector('#qiymats');
const sharcharadiusi = document.querySelector('#sharcharadiusi');
const burchak = document.querySelector('#burchak');




chiziqy.addEventListener('input', function() {
    qiymaty.value = chiziqy.value
});

qiymaty.addEventListener('input', function() {
    chiziqy.value = qiymaty.value
});


chiziqx.addEventListener('input', function() {
    qiymatx.value = 1.732 * chiziqx.value
});

qiymatx.addEventListener('input', function() {
    chiziqx.value = qiymatx.value / 1.732
});


const stylelab = document.querySelector('#stylelab');
const stylelabsstop = document.querySelector('#stylelabsstop');



var id = setInterval(function() {
    burchak.value = (Math.atan(chiziqy.value / (chiziqx.value * 1.732)) * 180 / Math.PI).toFixed(1);
    chiziqy.style.top = 125 + "px";
    chiziqy.style.left = -125 + "px";
    chiziqy.style.width = 250 + "px";
    chiziqx.style.top = 250 + "px";
    chiziqx.style.width = 433 + "px";
    chiziqs.style.top = (375 - 2.5 * chiziqy.value) + "px";
    chiziqs.style.left = (4.33 * chiziqx.value - 466) + "px";
    chiziqs.style.width = (Math.sqrt(4.33 * 4.33 * chiziqx.value * chiziqx.value + 6.25 * chiziqy.value * chiziqy.value)).toFixed(1) + "px";
    chiziqs.style.transform = "rotateZ(" + burchak.value + "deg)";
    sharcha.style.width = 20 + "px";
    sharcha.style.height = 20 + "px";
    sharcha.style.top = -17 + "px";
}, 1)

let shtop = -17;
let shleft = 0;
let shktop = 234;
let shkleft = 434;
let shanimationtime = 2;

stylelab.innerHTML = `
:root {
    --shtop: ${shtop}px;
    --shleft: ${shleft}px;
    --shktop: ${shktop}px;
    --shkleft: ${shkleft}px;
    --shanimationtime: ${shanimationtime}s;
}
`;
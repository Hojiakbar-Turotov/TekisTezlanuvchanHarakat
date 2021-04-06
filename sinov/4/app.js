const chiziqy = document.querySelector('#chiziqy');
const chiziqx = document.querySelector('#chiziqx');
const chiziqs = document.querySelector('#chiziqs');
const sharcha = document.querySelector('#sharcha');

const qiymaty = document.querySelector('#qiymaty');
const qiymatx = document.querySelector('#qiymatx');
const qiymats = document.querySelector('#qiymats');
const sharcharadiusi = document.querySelector('#sharcharadiusi');




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

// 1 metrgacha balandlik mavjud


const stylelab = document.querySelector('#stylelab');
const stylelabsstop = document.querySelector('#stylelabsstop');



let ytop = 125;
let yleft = -125;
let ywidth = 250;
let xtop = 250;
let xwidth = 433;
let sstop = 125;
let sleft = -34;
let swidth = 500;
let shwidth = 20;
let shheight = 20;
let shtop = -17;
let shleft = 0;
let shktop = 234;
let shkleft = 434;
let shanimationtime = 2;
let srotateZ = 30;

// chiziqy.onkeyup = function() {
// return sstop = (175 - chiziqy.value / 2);
// stylelabsstop.innerHTML = `
// :root {
//  --stop: ${sstop}px; 
// }
// `;
// return ksstop = sstop;
// }
// var intervalId = window.setInterval(function(){
/// call your function here
//   }, 5000);
// var ksstop = null;

stylelab.innerHTML = `
:root {
    --ytop: ${ytop}px;
    --yleft: ${yleft}px;
    --ywidth: ${ywidth}px;
    --xtop: ${xtop}px;
    --xwidth: ${xwidth}px;
    --sleft: ${sleft}px;
    --swidth: ${swidth}px;
    --stop: ${sstop}px; 
    --srotateZ: rotateZ(${srotateZ}deg);
    --shwidth: ${shwidth}px;
    --shheight: ${shheight}px;
    --shtop: ${shtop}px;
    --shleft: ${shleft}px;
    --shktop: ${shktop}px;
    --shkleft: ${shkleft}px;
    --shanimationtime: ${shanimationtime}s;
}
`;

stylelabsstop.innerHTML = `
:root {
--stop: ${sstop}px;
}
`;
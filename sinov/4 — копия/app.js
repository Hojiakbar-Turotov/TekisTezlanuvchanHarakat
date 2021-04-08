const chiziqy = document.querySelector('#chiziqy');
const chiziqx = document.querySelector('#chiziqx');
const chiziqs = document.querySelector('#chiziqs');
const sharcha = document.querySelector('#sharcha');
const burchak = document.querySelector('#burchak');

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



var id = setInterval(function() {
    burchak.value = (Math.atan(chiziqy.value / (chiziqx.value * 1.732)) * 180 / Math.PI).toFixed(1);
    chiziqy.style.top = 125 + "px";
    chiziqy.style.left = -125 + "px";
    chiziqy.style.width = 250 + "px";
    chiziqx.style.top = 250 + "px";
    chiziqx.style.width = 5 * chiziqs. * Math.sin(burchak.value) + "px";
    chiziqs.style.top = (175 - chiziqy.value / 2) + "px";
    chiziqs.style.left = (-63 + chiziqx.value / 3.46) + "px";
    chiziqs.style.width = 500 + "px";
    chiziqs.style.transform = "rotateZ(" + 30 + "deg)";
    sharcha.style.width = 20 + "px";
    sharcha.style.height = 20 + "px";
    sharcha.style.top = -17 + "px";
    // sharcha.style.animation-duration = 2 + "s";
}, 1)

// function animationch() {
//     chiziqy.style.top = 125 + `px`;
//     // chiziqs.style.top == (175 - chiziqy.value / 2)
// }



// let ytop = 125;
// let yleft = -125;
// let ywidth = 250;
// let xtop = 250;
// let xwidth = 433;
// let sstop = 125;
// let sleft = -34;
// let swidth = 500;
// let shwidth = 20;
// let shheight = 20;
let shtop = -17;
let shleft = 0;
let shktop = 234;
let shkleft = 434;
let shanimationtime = 2;
// let srotateZ = 30;

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
    --shtop: ${shtop}px;
    --shleft: ${shleft}px;
    --shktop: ${shktop}px;
    --shkleft: ${shkleft}px;
    --shanimationtime: ${shanimationtime}s;
}
`;

// stylelabsstop.innerHTML = `
// :root {
// --stop: ${sstop}px;
// }
// `;




//     {
//     if ((175 - chiziqy.value / 2) != chiziqs.style.top) {
//         chiziqs.style.top == (175 - chiziqy.value / 2);
//     }
// }
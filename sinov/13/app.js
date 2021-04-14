// Umumiy htmldan elementlarni chaqirish

// menyu
const nav = document.querySelector('#nav');
const body = document.querySelector('#body');
const footer = document.querySelector('#footer');

// sharcha va animatsiya, qiyalik
const stylecss = document.getElementById('stylecss');
const qiyalik30 = document.getElementById('qiyalik30');
const qiyalik45 = document.getElementById('qiyalik45');
const qiyalik60 = document.getElementById('qiyalik60');

// tekshirish
const vaqt = document.getElementById('styleanimation');

// sahifalardan bir biriga o'tish
const kirish = document.getElementById('kirish');
const boshlash = document.getElementById('boshlash');
const bajarish = document.getElementById('bajarish');
const taxlil = document.getElementById('taxlil');
const hulosa = document.getElementById('hulosa');

// bajarish
// 1 olinadigan natijalar
const tartibRaqami1Tajriba = document.getElementById('tartibRaqami1Tajriba');
const uzunlik1Tajriba = document.getElementById('uzunlik1Tajriba');
const vaqt1Tajriba1Natija = document.getElementById('vaqt1Tajriba1Natija');
const vaqt1Tajriba2Natija = document.getElementById('vaqt1Tajriba2Natija');
const vaqt1Tajriba3Natija = document.getElementById('vaqt1Tajriba3Natija');
const tezlanish1Tajriba1Natija = document.getElementById('tezlanish1Tajriba1Natija');
const tezlanish1Tajriba2Natija = document.getElementById('tezlanish1Tajriba2Natija');
const tezlanish1Tajriba3Natija = document.getElementById('tezlanish1Tajriba3Natija');
const urtachaTezlanish1Tajriba = document.getElementById('urtachaTezlanish1Tajriba');
const absolutXatolik1Tajriba1Natija = document.getElementById('absolutXatolik1Tajriba1Natija');
const absolutXatolik1Tajriba2Natija = document.getElementById('absolutXatolik1Tajriba2Natija');
const absolutXatolik1Tajriba3Natija = document.getElementById('absolutXatolik1Tajriba3Natija');
const urtachaAbsolutXatolik1Tajriba = document.getElementById('urtachaAbsolutXatolik1Tajriba');
const nisbiyXatolik1Tajriba = document.getElementById('nisbiyXatolik1Tajriba');
// 2 olinadigan natijalar
const tartibRaqami2Tajriba = document.getElementById('tartibRaqami2Tajriba');
const uzunlik2Tajriba = document.getElementById('uzunlik2Tajriba');
const vaqt2Tajriba1Natija = document.getElementById('vaqt2Tajriba1Natija');
const vaqt2Tajriba2Natija = document.getElementById('vaqt2Tajriba2Natija');
const vaqt2Tajriba3Natija = document.getElementById('vaqt2Tajriba3Natija');
const tezlanish2Tajriba1Natija = document.getElementById('tezlanish2Tajriba1Natija');
const tezlanish2Tajriba2Natija = document.getElementById('tezlanish2Tajriba2Natija');
const tezlanish2Tajriba3Natija = document.getElementById('tezlanish2Tajriba3Natija');
const urtachaTezlanish2Tajriba = document.getElementById('urtachaTezlanish2Tajriba');
const absolutXatolik2Tajriba1Natija = document.getElementById('absolutXatolik2Tajriba1Natija');
const absolutXatolik2Tajriba2Natija = document.getElementById('absolutXatolik2Tajriba2Natija');
const absolutXatolik2Tajriba3Natija = document.getElementById('absolutXatolik2Tajriba3Natija');
const urtachaAbsolutXatolik2Tajriba = document.getElementById('urtachaAbsolutXatolik2Tajriba');
const nisbiyXatolik2Tajriba = document.getElementById('nisbiyXatolik2Tajriba');
// 3 olinadigan natijalar
const tartibRaqami3Tajriba = document.getElementById('tartibRaqami3Tajriba');
const uzunlik3Tajriba = document.getElementById('uzunlik3Tajriba');
const vaqt3Tajriba1Natija = document.getElementById('vaqt3Tajriba1Natija');
const vaqt3Tajriba2Natija = document.getElementById('vaqt3Tajriba2Natija');
const vaqt3Tajriba3Natija = document.getElementById('vaqt3Tajriba3Natija');
const tezlanish3Tajriba1Natija = document.getElementById('tezlanish3Tajriba1Natija');
const tezlanish3Tajriba2Natija = document.getElementById('tezlanish3Tajriba2Natija');
const tezlanish3Tajriba3Natija = document.getElementById('tezlanish3Tajriba3Natija');
const urtachaTezlanish3Tajriba = document.getElementById('urtachaTezlanish3Tajriba');
const absolutXatolik3Tajriba1Natija = document.getElementById('absolutXatolik3Tajriba1Natija');
const absolutXatolik3Tajriba2Natija = document.getElementById('absolutXatolik3Tajriba2Natija');
const absolutXatolik3Tajriba3Natija = document.getElementById('absolutXatolik3Tajriba3Natija');
const urtachaAbsolutXatolik3Tajriba = document.getElementById('urtachaAbsolutXatolik3Tajriba');
const nisbiyXatolik3Tajriba = document.getElementById('nisbiyXatolik3Tajriba');





// menyu

nav.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('active');
    footer.classList.toggle('active');
});
// 

function kirishfunction() {
    sahifa = 2;
    setTimeout(function() { prev() }, 10);
}

function boshlashfunction() {
    sahifa = 1;
    setTimeout(function() { next() }, 10);
}

function bajarishfunction() {
    sahifa = 2;
    setTimeout(function() { next() }, 10);
}

function taxlilfunction() {
    sahifa = 3;
    setTimeout(function() { next() }, 10);
}

function hulosafunction() {
    sahifa = 4;
    setTimeout(function() { next() }, 10);
}




// sharcha va animatsiya, qiyalik



let burchak = null;
let uzunlik = null;


function uttizgradus() {
    stylecss.innerHTML = `
#animation div#chiziqy {
    top: 125px;
    left: -125px;
    width: 250px;
    transform: rotateZ(-90deg);
}

#animation div#chiziqx {
    top: 250px;
    width: 433px;
}

#animation div#chiziqs {
    top: 125px;
    left: -34px;
    width: 500px;
    transform: rotateZ(30deg);
}

#animation div#sharcha {
    top: -17px;
}
`;
    burchak = 30;
    uzunlik = 200;
    all();
    qiyalik30.classList.add('active');
}

function qirqbeshgradus() {
    stylecss.innerHTML = `
    #animation div#chiziqy {
        top: 125px;
        left: -125px;
        width: 250px;
        transform: rotateZ(-90deg);
    }
    
    #animation div#chiziqx {
        top: 250px;
        width: 250px;
    }
    
    #animation div#chiziqs {
        top: 125px;
        left: -52px;
        width: 353px;
        transform: rotateZ(45deg);
    }
    
    #animation div#sharcha {
        top: -17px;
    }
    
   
    
`;
    burchak = 45;
    uzunlik = 142;
    all();
    qiyalik45.classList.add('active');
}

function olmishgradus() {

    stylecss.innerHTML = `
    #animation div#chiziqy {
        top: 125px;
        left: -125px;
        width: 250px;
        transform: rotateZ(-90deg);
    }
    
    #animation div#chiziqx {
        top: 250px;
        width: 146.75px;
    }
    
    #animation div#chiziqs {
        top: 125px;
        left: -75px;
        width: 293.5px;
        transform: rotateZ(60deg);
    }
    
    #animation div#sharcha {
        top: -17px;
    }
    
   
    `;
    burchak = 60;
    uzunlik = 142;
    all();
    qiyalik60.classList.add('active');
}

function all() {
    qiyalik30.classList.remove('active');
    qiyalik45.classList.remove('active');
    qiyalik60.classList.remove('active');
    document.getElementById('style2all').innerHTML = `
    #animation div:not(#sharcha) {
        position: absolute;
        z-index: 11000;
        border: 4px solid #0075ff;
        border-radius: 5px;
    }
    
    #animation div#sharcha {
        position: absolute;
        border: 1px solid #000;
        border-radius: 50%;
        background-color: #000;
        width: 20px;
        height: 20px;
    }

    `;
    document.getElementById('tekshirish').classList.add('active');
}





// tekshirish



function tekshirish() {

    switch (burchak) {
        case 30:
            vaqt.innerHTML = `
            #animation div#sharcha {
                animation: sharchaanimation;
                animation-duration: 0.91s;
            }
            @keyframes sharchaanimation {
                0% {
                    top: -17px;
                    left: 0px;
                    transform: rotateZ(0);
                }
                11.11111%{
                    top: -13.9012px;
                    left:5.358025px;
                }
                22.22222%{
                    top: -4.60494px;
                    left: 21.4321px;
                }
                33.33333%{
                    top: 10.88889px;
                    left: 48.22222px;
                }
                44.44444%{
                    top: 32.58024px;
                    left: 85.7284px;
                }
                55.55556%{
                    top: 60.46913px;
                    left: 133.9506px;
                }
                66.66667%{
                    top: 94.55555px;
                    left: 192.8889px;
                }
                77.77778%{
                    top: 134.8395px;
                    left: 262.5432px;
                }
                88.88889%{
                    top: 181.321px;
                    left: 342.9136px;
                }
                100% {
                    top: 234px;
                    left: 434px;
                    transform: rotateZ(3600deg);
                }
            }
            `;

            setTimeout(function() { vaqt.innerHTML = ``; }, 950);
            break;
        case 45:
            vaqt.innerHTML = `
            #animation div#sharcha {
                animation: sharchaanimation;
                animation-duration: 0.64275s;
            }
            @keyframes sharchaanimation {
                0% {
                    top: -17px;
                    left: 0px;
                    transform: rotateZ(0);
                }
                11.11111%{
                    top: -13.9012px;
                    left: 3.098765px;
                }
                22.22222%{
                    top: -4.60494px;
                    left: 12.39506px;
                }
                33.33333%{
                    top: 10.88889px;
                    left: 27.88889px;
                }
                44.44444%{
                    top: 32.58024px;
                    left: 49.58025px;
                }
                55.55556%{
                    top: 60.46913px;
                    left: 77.46914px;
                }
                66.66667%{
                    top: 94.55555px;
                    left: 111.5556px;
                }
                77.77778%{
                    top: 134.8395px;
                    left: 151.8395px;
                }
                88.88889%{
                    top: 181.321px;
                    left: 198.321px;
                }
                100% {
                    top: 234px;
                    left: 251px;
                    transform: rotateZ(3600deg);
                }
            } `;
            setTimeout(function() { vaqt.innerHTML = ``; }, 643);
            break;
        case 60:
            vaqt.innerHTML = `
            #animation div#sharcha {
                animation: sharchaanimation;
                animation-duration: 0.527s;
                transform: rotateZ(0);
            }
            @keyframes sharchaanimation {
                0% {
                    top: -17px;
                    left: 0px;
                }
                11.11111%{
                    top: -13.9012px;
                    left: 1.802469px;
                }
                22.22222%{
                    top: -4.60494px;
                    left: 7.209876px;
                }
                33.33333%{
                    top: 10.88889px;
                    left: 16.22222px;
                }
                44.44444%{
                    top: 32.58024px;
                    left: 28.83951px;
                }
                55.55556%{
                    top: 60.46913px;
                    left: 45.06173px;
                }
                66.66667%{
                    top: 94.55555px;
                    left: 64.88889px;
                }
                77.77778%{
                    top: 134.8395px;
                    left: 88.32099px;
                }
                88.88889%{
                    top: 181.321px;
                    left: 115.358px;
                }
                100% {
                    top: 234px;
                    left: 146px;
                    transform: rotateZ(3600deg);
                }
            } `;
            setTimeout(function() { vaqt.innerHTML = ``; }, 527);
            break;
        default:

            // Xatolik yuz berdi
    }

}



// sahifalardan bir biriga o'tish


let sahifa = 1;

function allclose() {
    kirish.classList.add('d-none');
    boshlash.classList.add('d-none');
    bajarish.classList.add('d-none');
    taxlil.classList.add('d-none');
    hulosa.classList.add('d-none');
}

function next() {
    switch (sahifa) {
        case 1:
            allclose();
            boshlash.classList.remove('d-none');
            sahifa++;
            break;
        case 2:
            allclose();
            bajarish.classList.remove('d-none');
            sahifa++;
            break;
        case 3:
            allclose();
            taxlil.classList.remove('d-none');
            sahifa++;
            break;
        case 4:
            allclose();
            hulosa.classList.remove('d-none');
            sahifa++;
            break;
        default:

            // Xatolik yuz berdi
    }
}

function prev() {
    switch (sahifa) {
        case 2:
            allclose();
            kirish.classList.remove('d-none');
            sahifa--;
            break;
        case 3:
            allclose();
            boshlash.classList.remove('d-none');
            sahifa--;
            break;
        case 4:
            allclose();
            bajarish.classList.remove('d-none');
            sahifa--;
            break;
        case 5:
            allclose();
            taxlil.classList.remove('d-none');
            sahifa--;
            break;
        default:

            // Xatolik yuz berdi
    }
}

// bajarish
let sanash = 1;

function natijaOlish() {
    switch (burchak) {
        case 30:
            switch (sanash) {
                case 1:
                    document.getElementById('tartibRaqami1Tajriba').innerHTML = 1;
                    document.getElementById('uzunlik1Tajriba').innerHTML = 200;
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 2 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 2 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 2 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba1Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 950);
                    sanash++;
                    break;
                case 2:
                    tekshirish();
                    // document.getElementById('tartibRaqami1Tajriba').innerHTML = 1;
                    // document.getElementById('uzunlik1Tajriba').innerHTML = 200;
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 2 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 2 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 2 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba2Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 9) + 1))).toFixed(5);
                    }, 950);
                    sanash++;
                    break;
                case 3:
                    // document.getElementById('tartibRaqami1Tajriba').innerHTML = 1;
                    // document.getElementById('uzunlik1Tajriba').innerHTML = 200;
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 2 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 2 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 2 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba3Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 9) + 1))).toFixed(5);
                    }, 950);
                    sanash++;
                    break;
            }
            break;
        case 45:
            switch (sanash) {
                case 1:
                    document.getElementById('tartibRaqami1Tajriba').innerHTML = 2;
                    document.getElementById('uzunlik1Tajriba').innerHTML = 142;
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 1.42 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 1.42 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 1.42 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba1Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 650);
                    sanash++;
                    break;
                case 2:
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 1.42 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 1.42 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 1.42 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba2Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 650);
                    sanash++;
                    break;
                case 3:
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 1.42 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 1.42 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 1.42 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba3Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 650);
                    sanash++;
                    break;
            }
            break;
        case 60:
            switch (sanash) {
                case 1:
                    document.getElementById('tartibRaqami1Tajriba').innerHTML = 3;
                    document.getElementById('uzunlik1Tajriba').innerHTML = 117.4;
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 1.174 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 1.174 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 1.174 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba1Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 527);
                    sanash++;
                    break;
                case 2:
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 1.174 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 1.174 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 1.174 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba2Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 527);
                    sanash++;
                    break;
                case 3:
                    tekshirish();
                    setTimeout(function() {
                        let aniqtezlanish = (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180)));
                        let = aniqvaqt = (Math.sqrt(2 * 1.174 / aniqtezlanish));

                        let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
                        let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;

                        let minvaqt = (Math.sqrt(2 * 1.174 / mintezlanish));
                        let maxvaqt = (Math.sqrt(2 * 1.174 / maxtezlanish));

                        document.getElementById('vaqt1Tajriba3Natija').innerHTML = (minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5);
                    }, 527);
                    sanash++;
                    break;
            }
            break;




            // if ((sanash == 1) && (burchak == 30)) {
            //     sanash++;
            //     document.getElementById('tartibRaqami2Tajriba').innerHTML = 1;
            //     document.getElementById('uzunlik1Tajriba').innerHTML = 200;
            //     document.getElementById('vaqt1Tajriba1Natija').innerHTML = (Math.sqrt(2 * 2 / (9.81 * (Math.sin(burchak * Math.PI / 180) - 0.009 * Math.cos(burchak * Math.PI / 180))))).toFixed(5);
    }
    // sanash++;
}
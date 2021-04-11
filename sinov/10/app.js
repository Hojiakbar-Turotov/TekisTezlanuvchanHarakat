// menyu
const nav = document.querySelector('#nav');
const body = document.querySelector('#body');
const footer = document.querySelector('#footer');

nav.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('active');
    footer.classList.toggle('active');
});

// sharcha va animatsiya, qiyalik

const stylecss = document.getElementById('stylecss');
let burchak = null;
const qiyalik30 = document.getElementById('qiyalik30');
const qiyalik45 = document.getElementById('qiyalik45');
const qiyalik60 = document.getElementById('qiyalik60');

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








const vaqt = document.getElementById('styleanimation');

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

const kirish = document.getElementById('kirish');
const boshlash = document.getElementById('boshlash');
const bajarish = document.getElementById('bajarish');
const taxlil = document.getElementById('taxlil');
const hulosa = document.getElementById('hulosa');

let sahifa = 1;

function next() {
    switch (sahifa) {
        case 1:
            kirish.classList.add('d-none');
            boshlash.classList.remove('d-none');
            sahifa++;
            break;
        case 2:
            boshlash.classList.add('d-none');
            bajarish.classList.remove('d-none');
            sahifa++;
            break;
        case 3:
            bajarish.classList.add('d-none');
            taxlil.classList.remove('d-none');
            sahifa++;
            break;
        case 4:
            taxlil.classList.add('d-none');
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
            kirish.classList.add('d-none');
            boshlash.classList.remove('d-none');
            sahifa--;
            break;
        case 3:
            boshlash.classList.add('d-none');
            bajarish.classList.remove('d-none');
            sahifa--;
            break;
        case 4:
            bajarish.classList.add('d-none');
            taxlil.classList.remove('d-none');
            sahifa--;
            break;
        case 5:
            taxlil.classList.add('d-none');
            hulosa.classList.remove('d-none');
            sahifa--;
            break;
        default:

            // Xatolik yuz berdi
    }
}
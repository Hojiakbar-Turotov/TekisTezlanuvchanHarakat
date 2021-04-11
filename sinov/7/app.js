let stylecss = document.getElementById('stylecss');
let burchak = null;

function uttizgradus() {
    stylecss.innerHTML = `
section#animation div#chiziqy {
    top: 125px;
    left: -125px;
    width: 250px;
    transform: rotateZ(-90deg);
}

section#animation div#chiziqx {
    top: 250px;
    width: 433px;
}

section#animation div#chiziqs {
    top: 125px;
    left: -34px;
    width: 500px;
    transform: rotateZ(30deg);
}

section#animation div#sharcha {
    top: -17px;
}


`;
    burchak = 30;
}

function qirqbeshgradus() {
    stylecss.innerHTML = `
    section#animation div#chiziqy {
        top: 125px;
        left: -125px;
        width: 250px;
        transform: rotateZ(-90deg);
    }
    
    section#animation div#chiziqx {
        top: 250px;
        width: 250px;
    }
    
    section#animation div#chiziqs {
        top: 125px;
        left: -52px;
        width: 353px;
        transform: rotateZ(45deg);
    }
    
    section#animation div#sharcha {
        top: -17px;
    }
    
   
    
`;
    burchak = 45;
}

function olmishgradus() {

    stylecss.innerHTML = `
    section#animation div#chiziqy {
        top: 125px;
        left: -125px;
        width: 250px;
        transform: rotateZ(-90deg);
    }
    
    section#animation div#chiziqx {
        top: 250px;
        width: 146.75px;
    }
    
    section#animation div#chiziqs {
        top: 125px;
        left: -75px;
        width: 293.5px;
        transform: rotateZ(60deg);
    }
    
    section#animation div#sharcha {
        top: -17px;
    }
    
   
    `;
    burchak = 60;
}

let vaqt = document.getElementById('styleanimation').innerHTML;

function boshla() {
    switch (burchak) {
        case 30:
            vaqt = `
            section#animation div#sharcha {
                animation: sharchaanimation;
                animation-duration: 2s;
            }
            @keyframes sharchaanimation {
                0% {
                    top: -17px;
                    left: 0px;
                }
                100% {
                    top: 234px;
                    left: 434px;
                }
            }
            
            `;
            break;
        case 45:
            vaqt = `
            section#animation div#sharcha {
                animation: sharchaanimation;
                animation-duration: 2s;
            }
            @keyframes sharchaanimation {
                0% {
                    top: -17px;
                    left: 0px;
                }
                100% {
                    top: 234px;
                    left: 251px;
                }
            } `;
            break;
        case 60:
            vaqt = `
            section#animation div#sharcha {
                animation: sharchaanimation;
                animation-duration: 2s;
            }
            @keyframes sharchaanimation {
                0% {
                    top: -17px;
                    left: 0px;
                }
                100% {
                    top: 234px;
                    left: 146px;
                }
            } `;
            break;
        default:

            // Xatolik yuz berdi
    }

}
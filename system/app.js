const g = 9.81; 
 let isBoolean = true;

const alfa = document.getElementById('burchak');
const alfatekshiruv = document.getElementById('burchakMosligi');

alfa.onkeyup = function() {
    if(alfa.value > 90){
        isBoolean = false;
        alfatekshiruv.innerHTML = `burchak 90&#176; dan katta bo'lishi mumkin emas! `;
    } else if(alfa.value < 0){
        isBoolean = false;
        alfatekshiruv.innerHTML = `burchak manfiy bo'lishi mumkin emas! `;
    } else{
        isBoolean = true;
        alfatekshiruv.innerHTML = ``;
    }
}

const myu = document.getElementById("myu");
const myutekshiruv = document.getElementById('myuMosligi');

myu.onkeyup = function() {
    if(myu.value > 1){
        isBoolean = false;
        myutekshiruv.innerHTML = `burchak 1 dan katta bo'lishi mumkin emas! `;
    } else if(myu.value < 0){
        isBoolean = false;
        myutekshiruv.innerHTML = `burchak manfiy bo'lishi mumkin emas! `;
    } else{
        isBoolean = true;
        myutekshiruv.innerHTML = ``;
    }
}


const yul = document.getElementById("yul");


function hisobla(){
    if (isBoolean){
    document.getElementById('vaqt').innerHTML = `t=` + (Math.sqrt(2 * yul.value / (g * (Math.sin(alfa.value * Math.PI / 180) - myu.value * Math.cos(alfa.value * Math.PI / 180))))).toFixed(7) + `s` ;
    } else {
        document.getElementById('vaqt').innerHTML = `Xatolik yuz berdi!`;
    }
}
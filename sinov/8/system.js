let sahifaraqami = 1;
/*let sahifa = document.getElementById('sahifa');
let sahifa1texti = `
    <br><h3>Ishning maqsadi:</h3>
    <p>Qiya novdan dumalab tushayotgan sharchaning bosib o'tgan yo'li va harakat vaqtini o'lchash orqali tekis tezlanuvchan harakatlanayotgan jism tezlanishini aniqlashni o'rganish. <br> <b>Kerakli jihozlar:</b> metall nov, po'lat sharcha, shtativ,
        metall silindr, o'lchov tasmasi, sekundomer.</p>
    <img src="./img/namuna.png" alt="bu yerda tajriba qurilmasi namunasi bor.">
    <h2 style="text-align: center;">Ishni bajarish tartibi:</h2>
    <p>
        1. Rasmda ko'rsatilgandek, metall novni shtativga o'rnating, metall silindrni novning qui uchiga joylashtiring.
        <br> 2. Novning yuqori uchidan qoyib yuborilgan sharcha novning qui uchidagi silindrga borib urilgunga qadar o'tgan vaqtni sekundomer yordamida o'lchang.
        <br> 3. Tajribani 3 marta takrorlang. Har gal sharhcaning vaqti t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub> ni o'lchang. Natijalarni jadvalga yozib boring.
        <br> 4. O'lchov tasmasi yordamida sharchaning bosib o'tgan s yo'lini hisoblang.
        <br> 5. Tekis tezlanuvchan harakatda jismning bosib o'tgan yo'l s=at<sup>2</sup>/2 formuladan tezlanish formulasi a=2s/t<sup>2</sup> bo'ladi. Tajribada o'lchangan har bir s yo'lni va har bir t<sub>1</sub>, t<sub>2</sub>, t
        <sub>3</sub> vaqtni birma-bir tezlanish formulasiga qoyib, a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub> tezlanishlarni hisoblang.
        <br> 6. a<sub>o'rt</sub>=(a<sub>1</sub>+a<sub>2</sub>+a<sub>3</sub>)/3 formula yordamida o'rtacha tezlanishini hisoblang. Olingan bu qiymat qiya novdan dumalab tushayotgan sharchaning tezlanishini ifodalaydi.
        <br> 7. Ushbu tajribani novning qiyaligi uch xil bo'lgan holat uchun bajaring.
        <br> 8. &#916;a<sub>n</sub>=|a<sub>o'rt</sub>-a<sub>n</sub>| formuladan o'rtacha xatolik topiladi.
        <br> 9. &#916;a<sub>o'rt</sub>=(&#916;a<sub>1</sub>+&#916;a<sub>2</sub>+&#916;a<sub>3</sub>)/3 formuladan o'rtacha absolut xatolikni hisoblang.
        <br> 10. &#949;=(&#916;a<sub>o'rt</sub>/a<sub>o'rt</sub>)*100% formuladan nisbiy xatolikni toping.
        <br> 11. Natijalarni tahlil qiling va hulosa chiqaring.
        <table>
            <tr>
                <td>T/r</td>
                <td>s, m</td>
                <td>t<sub>1</sub>, s</td>
                <td>t<sub>2</sub>, s</td>
                <td>t<sub>3</sub>, s</td>
                <td>a<sub>1</sub>, m/s<sup>2</sup></td>
                <td>a<sub>2</sub>, m/s<sup>2</sup></td>
                <td>a<sub>3</sub>, m/s<sup>2</sup></td>
                <td>a<sub>o'rt</sub>, m/s<sup>2</sup></td>
                <td>&#916;a<sub>o'rt</sub>, m/s<sup>2</sup></td>
                <td>&#949;, %</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr style="opacity: 0;">
                <td>00000</td>
                <td>0000000</td>
                <td>0000000</td>
                <td>0000000</td>
                <td>0000000</td>
                <td>000000000</td>
                <td>000000000</td>
                <td>000000000</td>
                <td>00000000000</td>
                <td>00000000000</td>
                <td>0000000</td>
            </tr>
        </table>
    </p>




`;
let sahifa2texti = `
     
            <section id="animation">
                <div id="chiziqx"></div>
                <div id="chiziqy"></div>
                <div id="chiziqs"></div>
                <div id="sharcha"></div>
            </section>
            <section id="result">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="row">
                            <div class="col-md-3">
                                <span class="input-group-text">h=100sm </span>
                            </div>
                            <div class="col-md-3">
                                <span class="input-group-text">x=173sm </span>
                            </div>
                            <div class="col-md-3">
                                <span class="input-group-text">&#945;=30&#176; </span>
                            </div>
                            <div class="col-md-3">
                                <button class="input-group-text" onclick="uttizgradus()">Tanlash</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="input-group-text">h=100sm </span>
                            </div>
                            <div class="col-md-3">
                                <span class="input-group-text">x=100sm </span>
                            </div>
                            <div class="col-md-3">
                                <span class="input-group-text">&#945;=45&#176; </span>
                            </div>
                            <div class="col-md-3">
                                <button class="input-group-text" onclick="qirqbeshgradus()">Tanlash</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="input-group-text">h=100sm </span>
                            </div>
                            <div class="col-md-3">
                                <span class="input-group-text">x=58.7sm </span>
                            </div>
                            <div class="col-md-3">
                                <span class="input-group-text">&#945;=60&#176; </span>
                            </div>
                            <div class="col-md-3">
                                <button class="input-group-text" onclick="olmishgradus()">Tanlash</button>
                            </div>
                        </div>
                    </div>
  
`;
*/

function sahifa1() {
    document.getElementById("kirish").classList.remove("d-none");
    document.getElementById("boshlash").classList.add("d-none");
    sahifaraqami = 1;
}

function sahifa2() {
    document.getElementById("boshlash").classList.remove("d-none");
    document.getElementById("kirish").classList.add("d-none");
    sahifaraqami = 2;
}



const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

let stylecss = document.getElementById('stylecss');
let burchak = 0;

function uttizgradus() {
    stylecss.innerHTML = `
          section# animation div# chiziqy {
              top: 125 px;
              left: -125 px;
              width: 250 px;
              transform: rotateZ(-90 deg);
          }
      
          section# animation div# chiziqx {
              top: 250 px;
              width: 433 px;
          }
      
          section# animation div# chiziqs {
              top: 125 px;
              left: -34 px;
              width: 500 px;
              transform: rotateZ(30 deg);
          }
      
          section# animation div# sharcha {
              top: -17 px;
          }
      
      
          `;
    burchak = 30;
}

function qirqbeshgradus() {
    stylecss.innerHTML = `
          section# animation div# chiziqy {
              top: 125 px;
              left: -125 px;
              width: 250 px;
              transform: rotateZ(-90 deg);
          }
      
          section# animation div# chiziqx {
              top: 250 px;
              width: 250 px;
          }
      
          section# animation div# chiziqs {
              top: 125 px;
              left: -52 px;
              width: 353 px;
              transform: rotateZ(45 deg);
          }
      
          section# animation div# sharcha {
              top: -17 px;
          }
      
      
      
          `;
    burchak = 45;
}

function olmishgradus() {

    stylecss.innerHTML = `
          section# animation div# chiziqy {
              top: 125 px;
              left: -125 px;
              width: 250 px;
              transform: rotateZ(-90 deg);
          }
      
          section# animation div# chiziqx {
              top: 250 px;
              width: 146.75 px;
          }
      
          section# animation div# chiziqs {
              top: 125 px;
              left: -75 px;
              width: 293.5 px;
              transform: rotateZ(60 deg);
          }
      
          section# animation div# sharcha {
              top: -17 px;
          }
      
      
          `;
    burchak = 60;
}

// let vaqt = document.getElementById('styleanimation');

// function boshla() {
//     switch (burchak) {
//         case 30:
//             vaqt.innerHTML = `
//             section# animation div# sharcha {
//                 animation: sharchaanimation;
//                 animation - duration: 2 s;
//             }
//             @keyframes sharchaanimation {
//                 0 % {
//                     top: -17 px;
//                     left: 0 px;
//                 }
//                 100 % {
//                     top: 234 px;
//                     left: 434 px;
//                 }
//             }

//             `;
//             break;
//         case 45:
//             vaqt.innerHTML = `
//             section# animation div# sharcha {
//                 animation: sharchaanimation;
//                 animation - duration: 2 s;
//             }
//             @keyframes sharchaanimation {
//                 0 % {
//                     top: -17 px;
//                     left: 0 px;
//                 }
//                 100 % {
//                     top: 234 px;
//                     left: 251 px;
//                 }
//             }
//             `;
//             break;
//         case 60:
//             vaqt.innerHTML = `
//             section# animation div# sharcha {
//                 animation: sharchaanimation;
//                 animation - duration: 2 s;
//             }
//             @keyframes sharchaanimation {
//                 0 % {
//                     top: -17 px;
//                     left: 0 px;
//                 }
//                 100 % {
//                     top: 234 px;
//                     left: 146 px;
//                 }
//             }
//             `;
//             break;
//         default:

//             // Xatolik yuz berdi
//     }

// }
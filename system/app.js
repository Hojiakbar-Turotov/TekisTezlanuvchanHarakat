const g = 9.81; 
let alfa = 6;
let sinalfa = Math.sin(alfa * Math.PI / 180);
let cosalfa = Math.cos(alfa * Math.PI / 180);
let myu = 0.009;

let a = g * (sinalfa - myu * cosalfa);
console.log(a);

let S = 0.8;

let t = Math.sqrt(2*S/a);
console.log(t);
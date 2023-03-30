let a1 = parseInt(prompt("Ingrese el angulo 1"));
let a2 = parseInt(prompt("Ingrese el angulo 2"));
let a3 = parseInt(prompt("Ingrese el angulo 3"));

let x = a1+a2+a3;

if (x == 180) {
    console.log("Los tres ángulos corresponden a un triangulo");
}else{
    console.log("Los tres ángulos no corresponden a un triangulo");
}

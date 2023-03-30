let a1 = parseInt(prompt("Ingrese el angulo 1"));
let a2 = parseInt(prompt("Ingrese el angulo 2"));
let a3 = parseInt(prompt("Ingrese el angulo 3"));

let x = a1+a2+a3;

switch (true) {
    case x ==180:
        console.log("los tres ángulos corresponden a un triangulo");
        break;

    default:
        console.log("los tres ángulos no corresponden a un triangulo");
        break;

}


let n1 = parseInt(prompt("Ingrese un número"));

let x = n1 % 5;

switch (true) {
    case x ==0:
        console.log(n1," es divisor de cinco");
        break;
default:
    console.log(n1," no es divisor de cinco");
    break;
}

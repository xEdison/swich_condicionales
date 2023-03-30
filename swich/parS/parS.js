let n1 = parseInt(prompt("Ingrese un número"));

let x = n1 % 2;

switch (true) {
    case x == 0:
        console.log(n1," es par");
        break;

    default:
        console.log(n1," no es par");
        break;
}

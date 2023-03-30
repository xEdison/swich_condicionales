let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));

switch (true) {
    case n1 >= n2:
        console.log(n1," es mayor que ",n2);
        break;
    case n1 <= n2:
        console.log(n1," es menor que ",n2);
        break;
    default:
        console.log("Ambos números son iguales");
        break;

}
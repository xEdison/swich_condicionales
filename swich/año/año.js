let año = parseInt(prompt("Ingrese un año"));

switch (true) {
    case año % 4 ==0 && año % 100 !==0 || año % 400 == 0:
        console.log("El año es bisiesto")
        break;

    default:
        console.log("El año no es bisiesto");
        break;
}
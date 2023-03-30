let menu = parseInt(prompt("Ingrese 1 si quiere un desayuno, 2 si quiere un almuerzo y 3 si quiere una cena"));

switch (menu) {
    case 1:
        console.log("Ud ordeno un desayuno");
        break;

    case 2:
        console.log("Ud ordeno un almuerzo");
        break;

    case 3:
        console.log("Ud ordeno una cena");
        break;

    default:
        console.log("Porfavor ingrese una opción valida");
        break;
}
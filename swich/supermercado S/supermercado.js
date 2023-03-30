let producto = prompt("ingrese producto");

switch (producto) {
    case "crema":
        console.log("Paga IVA");
        break;
    case "vino":
        console.log("Paga IVA");
        break;
    case "arroz":
       console.log("No paga IVA");
        break;
    case "lentejas":
       console.log("No paga IVA");
        break;
    default:
        console.log("Por favor ingrese un producto valido")
        break;
}

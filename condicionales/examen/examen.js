let nombre = prompt("Ingrese su nombre");
let correo = prompt("Ingrese su correo electronico");
let nit = prompt("Ingrese su NIT");
let contraseña = prompt("Ingrese su contraseña");

if (correo.includes("@")) {
    console.log(nombre," su correo es valido"); 
}else{
    console.log(nombre," su correo es invalido");
}

if (nit.includes("-")) {
    console.log(nombre," su NIT es valido"); 
}else{
    console.log(nombre," su NIT es invalido");
}

if (contraseña.length <= 12) {
    console.log(nombre," su contraseña es valida");
    
} else {
    console.log(nombre," su contraseña es invalida");
    
}

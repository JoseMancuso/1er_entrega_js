alert("A continuación, seleccione los 4 caballos para tirar de su carreta");

function ingreseSeleccion(mensaje) {
    let input;
    do {
        input = parseFloat(prompt(mensaje));
        if (isNaN(input)) {
            alert("Ingrese un número de opción correcto");
        }
        else if (input < 1 || input > 4) {
            alert("Ingrese un número de opción correcto");
        }
    } while (isNaN(input) || (input < 1 || input > 4));
    return input;
}

for (cantidadCaballos = 0; cantidadCaballos < 4; cantidadCaballos++) {
    let raza = ingreseSeleccion("Seleccione la raza del caballo Nº " + (cantidadCaballos + 1) +": \n1. Mustang \n2. Arabe \n3. Andaluz \n4. Paso Fino")
    let edad = ingreseSeleccion("Seleccione la edad del caballo Nº " + (cantidadCaballos + 1) +": \n1. Potrillo \n2. Jóven \n3. Adulto \n4. Viejo")
    let tier = ingreseSeleccion("Seleccione el tier del caballo Nº " + (cantidadCaballos + 1) +": \n1. Mestizo \n2. Campeón \n3. Noble \n4. Purasangre")
}

alert("La carreta ya tiene sus 4 caballos.")
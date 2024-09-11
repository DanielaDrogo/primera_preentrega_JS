
// ~INICIO DE SESION~ //

// declaro las variables con el usuario y la contraseña
let user = "DON PEPE";
let cont = 12345;

for (let intentos = 5; intentos >= 0; intentos--) {

    // ingreso de usuario y contraseña
    let username = prompt("Ingrese su nombre de usuario:").toUpperCase();
    let password = parseInt(prompt("Ingrese su contraseña:"));

    // encierro al usuario en un bucle infinito si no pone una contraseña con numeros
    while (isNaN(password)) {
        password = parseInt(prompt("La contraseña debe ser numérica. Ingrésela nuevamente:"));
    }

    if (username === user && password === cont) {
    // inicio de sesion exitoso
    alert("Inicio de sesión exitoso");
    document.write("<h1>Bienvenido señor " + user + " 🥳</h1>");
    break

    // se descuentan el numero de intentos
    } else if( intentos > 0) {
        alert("Nombre de usuario o contraseña incorrectos le quedan " + intentos + " intentos");
        
    // mensaje cuando el numero de intentos llega a 0
    } else{
        alert("Se cabaron los intentos.");
        alert("Se a detectado que usted es un chorro que se quiere robar la cuenta. Pero no se preocupe, la policia ira por usted 🚓");
        alert("Que tenga un buen día 😊");
        document.write("<h1>🚓</h1>");
    } 
}













document.write("<h2>Holis :3<h2/>")


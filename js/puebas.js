
// // ~INICIO DE SESION~ //

// // declaro las variables con el usuario y la contraseña
// let user = "DON PEPE";
// let cont = 12345;

// for (let intentos = 5; intentos >= 0; intentos--) {

//     // ingreso de usuario y contraseña
//     let username = prompt("Ingrese su nombre de usuario:").toUpperCase();
//     let password = parseInt(prompt("Ingrese su contraseña:"));

//     // encierro al usuario en un bucle infinito si no pone una contraseña con numeros
//     while (isNaN(password)) {
//         password = parseInt(prompt("La contraseña debe ser numérica. Ingrésela nuevamente:"));
//     }

//     if (username === user && password === cont) {
//     // inicio de sesion exitoso
//         alert("Inicio de sesión exitoso");
//         document.write("<h1>Bienvenido señor " + user + " 🥳</h1>");
//         break

//     // se descuentan el numero de intentos
//     } else if( intentos > 0) {
//         alert("Nombre de usuario o contraseña incorrectos le quedan " + intentos + " intentos");
        
//     // mensaje cuando el numero de intentos llega a 0
//     } else{
//         alert("Se cabaron los intentos.");
//         alert("Se a detectado que usted es un chorro que se quiere robar la cuenta. Pero no se preocupe, la policia ira por usted 🚓");
//         alert("Que tenga un buen día 😊");
//         document.write("<h1>🚓</h1>");
//     } 
// }






// declaro las variables con el usuario y la contraseña
// let usuario_correcto = "DON PEPE";
// let contrasenia_correcta = 12345;



// while (true) {

//     const opcion = Number(prompt("ingrese 1 para loguearse o ingrese 2 para iniciar sesion"))

//     if (opcion === 1) {
//         // se registra

//         function logeo(Registro) {
//             let usuario_correcto = prompt("cree un nombre de usuario")
//             let contrasenia_correcta = prompt("cree una contraseña numerica")
//         }


//     } else if (opcion === 2) {

//         // ~INICIO DE SESION~ //
//         for (let intentos = 5; intentos >= 0; intentos--) {

//             // ingreso de usuario y contraseña
//             let usuario = prompt("Ingrese su nombre de usuario:").toUpperCase();
//             let contracenia = parseInt(prompt("Ingrese su contraseña:"));

//             // encierro al usuario en un bucle infinito si no pone una contraseña con numeros
//             while (isNaN(contracenia)) {
//                 contracenia = parseInt(prompt("La contraseña debe ser numérica. Ingrésela nuevamente:"));
//             }

//             if (usuario === usuario_correcto && contracenia === contrasenia_correcta) {
//             // inicio de sesion exitoso
//                 alert("Inicio de sesión exitoso");
//                 document.write("<h1>Bienvenido señor " + usuario_correcto + " 🥳</h1>");
//                 break

//             // se descuentan el numero de intentos
//             } else if( intentos > 0) {
//                 alert("Nombre de usuario o contraseña incorrectos le quedan " + intentos + " intentos");
                
//             // mensaje cuando el numero de intentos llega a 0
//             } else{
//                 alert("Se cabaron los intentos.");
//                 alert("Se a detectado que usted es un chorro que se quiere robar la cuenta. Pero no se preocupe, la policia ira por usted 🚓");
//                 alert("Que tenga un buen día 😊");
//                 document.write("<h1>🚓</h1>");
//             } 
//         }

//     } else {
//         alert("Opción inválida. Por favor, elija 1 o 2.");
//     }   
// }







// for (let intentos = 5; intentos >= 0; intentos--) {

//                 // ingreso de usuario y contraseña
//                 let usuario = prompt("Ingrese su nombre de usuario:").toUpperCase();
//                 let contracenia = parseInt(prompt("Ingrese su contraseña:"));
    
//                 // encierro al usuario en un bucle infinito si no pone una contraseña con numeros
//                 while (isNaN(contracenia)) {
//                     contracenia = parseInt(prompt("La contraseña debe ser numérica. Ingrésela nuevamente:"));
//                 }
    
//                 if (usuario === usuario_correcto && contracenia === contrasenia_correcta) {
//                 // inicio de sesion exitoso
//                     alert("Inicio de sesión exitoso");
//                     document.write("<h1>Bienvenido señor " + usuario_correcto + " 🥳</h1>");
//                     break
    
//                 // se descuentan el numero de intentos
//                 } else if( intentos > 0) {
//                     alert("Nombre de usuario o contraseña incorrectos le quedan " + intentos + " intentos");
                    
//                 // mensaje cuando el numero de intentos llega a 0
//                 } else{
//                     alert("Se cabaron los intentos.");
//                     alert("Se a detectado que usted es un chorro que se quiere robar la cuenta. Pero no se preocupe, la policia ira por usted 🚓");
//                     alert("Que tenga un buen día 😊");
//                     document.write("<h1>🚓</h1>");
//                 } 
//             }



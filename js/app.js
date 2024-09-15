
// Objeto para almacenar usuarios y contraseñas
const usuariosRegistrados = {};

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const nuevoUsuario = prompt("Cree un nombre de usuario:").toUpperCase();
    const nuevaContrasenia = parseInt(prompt("Cree una contraseña numérica:"));

    // Almacena el usuario y la contraseña en el objeto
    usuariosRegistrados[nuevoUsuario] = nuevaContrasenia;

    alert("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
}

// Función para iniciar sesión
function iniciarSesion() {

    const usuario = prompt("ingrese el nombre de usuario").toUpperCase();
    const contrasenia = parseInt(prompt("ingrese la contraseña 'recuerde que es numerica'"));
    
     // Verifica si el usuario y la contraseña coinciden
     if (usuariosRegistrados(usuario)) {
        const contraseniaAlmacenada = usuariosRegistrados[usuario];
        if (contraseniaAlmacenada === contrasenia) {
            alert("Inicio de sesión exitoso. ¡Bienvenido!");
            
        } else {
            alert("Contraseña incorrecta. Inténtalo nuevamente.");
        }
    } else {
        alert("Nombre de usuario incorrecto.");
    }
}


while (true) {
    const opcion = Number(prompt("Ingrese 1 para registrarse o 2 para iniciar sesión"));

    if (opcion === 1) {
        registrarUsuario();
    } else if (opcion === 2) {
        iniciarSesion();
    } else {
        alert("Opción inválida. Por favor, elija 1 o 2.");
    }
}


   










document.write("<h2>Holis :3<h2/>")



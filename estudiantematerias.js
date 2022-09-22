function validarformulario() {
    let usuario = document.getElementById("txtUsuario").value;
    let password = document.getElementById("txtPassword").value;
    let expresion = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (usuario.length == 0 || usuario.length < 8) {
        alert("Ingresar el nombre del usuario");

    }


    if (password.length == 0 || password.length < 8) {
        alert("Ingresar clave correcta")

    }
}



function ingreso() {
    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    if (usuario === "" || contraseña === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Aquí puedes agregar tu lógica de validación
    alert("Ingreso exitoso!\nUsuario: " + usuario);
}
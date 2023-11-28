function calcularPrecio() {
    // Obtener elementos del formulario
    var nombre = document.getElementById('n1').value;
    var telefono = document.getElementsByName('numero:')[0].value;
    var paleta = document.querySelector('.pais');
    var nivel = obtenerNivelSeleccionado();

    // Verificar que se haya seleccionado una paleta
    if (paleta.value === "") {
        alert("Selecciona una paleta");
        return;
    }

    // Obtener el precio de la paleta seleccionada
    var precioPaleta = obtenerPrecioPaleta(paleta.value);

    // Calcular el precio total
    var precioTotal = precioPaleta ;

    // Mostrar el resultado
    mostrarResultado(nombre, telefono, paleta.options[paleta.selectedIndex].text, nivel, precioTotal);
}

// Función para obtener el nivel seleccionado
function obtenerNivelSeleccionado() {
    var niveles = document.querySelectorAll('input[type="checkbox"]');
    var nivelSeleccionado = 0;

    niveles.forEach(function (nivel) {
        if (nivel.checked) {
            nivelSeleccionado++;
        }
    });

    return nivelSeleccionado;
}

// Función para obtener el precio de la paleta seleccionada
function obtenerPrecioPaleta(paleta) {
    var precios = {
        "1": 100000,  // Bullpadel
        "2": 150000,  // Nox
        "3": 200000   // Adidas
    };

    return precios[paleta];
}

// Función para mostrar el resultado
function mostrarResultado(nombre, telefono, paleta, nivel, precioTotal) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>Nombre: ${nombre}</p>
        <p>Número de teléfono: ${telefono}</p>
        <p>Paleta seleccionada: ${paleta}</p>
        <p>Nivel seleccionado: ${nivel}</p>
        <p>Precio total: $${precioTotal}</p>
    `;
}

// Función para borrar los datos del formulario
function borrarDatos() {
    document.getElementById('n1').value = "";
    document.getElementsByName('numero:')[0].value = "";
    var niveles = document.querySelectorAll('input[type="checkbox"]');
    niveles.forEach(function (nivel) {
        nivel.checked = false;
    });
    var paleta = document.querySelector('.pais');
    paleta.selectedIndex = 0;

    // Limpiar el resultado
    document.getElementById('resultado').innerHTML = "";
}
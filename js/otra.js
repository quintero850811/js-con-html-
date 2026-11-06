
function calcularPresupuesto() {

    // Obtener los datos del formulario
    let invitados = document.getElementById("numero-inv").value;
    let costoComida = document.getElementById("cost-comida").value;
    let costoBebida = document.getElementById("cost-bebida").value;
    let decoracion = document.getElementById("cost-decor").value;
    let musica = document.getElementById("cost-musica").value;
    let porcentajePropina = document.getElementById("propina-porc").value;

    // Validar campos vacíos
    if (
        invitados === "" ||
        costoComida === "" ||
        costoBebida === "" ||
        decoracion === "" ||
        musica === "" ||
        porcentajePropina === ""
    ) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Convertir los valores a números
    invitados = Number(invitados);
    costoComida = Number(costoComida);
    costoBebida = Number(costoBebida);
    decoracion = Number(decoracion);
    musica = Number(musica);
    porcentajePropina = Number(porcentajePropina);

    // Validar que los valores sean correctos
    if (
        !Number.isFinite(invitados) ||
        !Number.isFinite(costoComida) ||
        !Number.isFinite(costoBebida) ||
        !Number.isFinite(decoracion) ||
        !Number.isFinite(musica) ||
        !Number.isFinite(porcentajePropina) ||
        !Number.isInteger(invitados) ||
        invitados <= 0 ||
        costoComida < 0 ||
        costoBebida < 0 ||
        decoracion < 0 ||
        musica < 0 ||
        porcentajePropina < 0
    ) {
        alert("Ingrese valores válidos. Los invitados deben ser un número entero mayor que cero y los costos y la propina no pueden ser negativos.");
        return;
    }

    // Mostrar una alerta con los valores ingresados
   

    // Calcular el costo total de comida
    let comidaTotal = invitados * costoComida;

    // Calcular el costo total de bebida
    let bebidaTotal = invitados * costoBebida;

    // Calcular el subtotal
    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;

    // Calcular la propina
    let propina = subtotal * (porcentajePropina / 100);

    // Calcular el total general
    let totalGeneral = subtotal + propina;

    // Calcular el costo por invitado
    let costoPorInvitado = totalGeneral / invitados;

    // Formatear los valores en pesos colombianos
    function formatoMoneda(valor) {
        return valor.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        });
    }

    // Obtener todas las filas del cuerpo de la tabla
    let filas = document.querySelectorAll("tbody tr");

    // Escribir los resultados en la segunda celda de cada fila
    filas[0].children[1].textContent = formatoMoneda(comidaTotal);
    filas[1].children[1].textContent = formatoMoneda(bebidaTotal);
    filas[2].children[1].textContent = formatoMoneda(decoracion);
    filas[3].children[1].textContent = formatoMoneda(musica);
    filas[4].children[1].textContent = formatoMoneda(subtotal);
    filas[5].children[1].textContent = formatoMoneda(propina);
    filas[6].children[1].textContent = formatoMoneda(totalGeneral);
    filas[7].children[1].textContent = formatoMoneda(costoPorInvitado);

}

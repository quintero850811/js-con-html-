function calcular(){
    let cantidad  =parseInt(document.getElementById("cantidad").value);
    let precio =parseInt(document.getElementById("precio").value);

    let subtotal =cantidad*precio

    document.getElementById("subtotal").value=subtotal;

    let iva =subtotal*0.19;
    document.getElementById("iva").value = iva;
    
    let descuento =subtotal*0.10;
    document.getElementById("descuento").value=descuento;

    let total =subtotal - descuento + iva;
    document.getElementById("total").value=total.toLocaleString('es-co');

}



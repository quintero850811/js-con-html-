function sumar(){
    //let = declarar una variable 
    //parseInt = indica que es una variable numerica entera 
    //document. indica que lo buscaraen el htm
    //getElementbyId indica que lo busque por el id en las etiquetas 
    //("num1") es el id que tiene la etiqueta en el htm
    //.value = 
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let suma =varn1+varn2;

    document.getElementById("resultado1").value =suma;

}
function restar(){
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);
    
    document.getElementById("resultado1").value =varn1-varn2;

}
function multi(){
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);
    
    document.getElementById("resultado1").value=`${varn1*varn2}`;

}
function divi(){
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);
    
    if(varn2===0){
        alert("no se puede dividir por cero.");
        return; //finaliza el codigo para no mostrar el resusltado
    }
    document.getElementById("resultado1").value=`${varn1/varn2}`;
}
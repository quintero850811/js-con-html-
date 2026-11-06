function calcular (){
    let nota1=parseInt(document.getElementById("nota1").value);
    let nota2=parseInt(document.getElementById("nota2").value);
    let nota3=parseInt(document.getElementById("nota3").value);

 //valida que ninguna nota este fuera del rango
 if(nota1<0 || nota1>5){
    alert("nota 1: invalida");
    return;
 }
  if(nota2<0 || nota2>5){
    alert("nota 2: invalida");
    return;
  }
     if(nota3<0 || nota3>5){
    alert("nota 3: invalida");
    return;

     }

     let promedio =(nota1+nota2+nota3)/3;
     document.getElementById("promedio").value =promedio.toFixed(1);

     if (promedio<3){
        alert("perdio");
        return
     }


}
let resultado=0;
function sumando(numero1,numero2){
     
       resultado= numero1+numero2;
       return resultado;
}

console.log(sumando(4 , 5));
console.log(sumando(8 , 12));

var hoyEsUnDíaSoleado;  //EJEMPLO DE CAMEL CASE


//HALLANDO EL AREA DE UN CIRCULO
//let areaCirculo;
//let radio;
//const pi=3.14;
//radio=prompt("Ingresa un radio");
//areaCirculo=pi*radio*radio; //3.14*5*= 78.5
//console.log(resultadoArea);

//pasando código a función
function areaCirculo(radio){
    const pi =3.14;  //cuando usamos const significa que nunca va a cambiar ese valor 
    let resultadoArea;
    resultadoArea= pi*radio*radio;
    return resultadoArea;
}

let radioValor = prompt("INGRESA UN RADIO:");
console.log(areaCirculo(radioValor));


function notas(calificacion){

    if(calificacion>=13){

        alert("Usted aprobó el curso, felicidades!");

    }

    else if(calificacion<13){

        alert("Usted jaló el curso, debe esforzarse más para la próxima");
    }
}

let valorNota = prompt("INGRESA TU NOTA:");
notas(valorNota);

function areaTriangulo(base,altura){
    area= base*altura/2; //base=5 altura=4
    return area;

}

let baseTriangulo = prompt("INGRESA UNA BASE PARA EL TRIANGULO");
let alturaTriangulo = prompt("INGRESA UNA ALTURA PARA EL TRIANGULO");

console.log(areaTriangulo(baseTriangulo , alturaTriangulo));


function areaCuadrado(lado ){

    let area = lado*lado;
    return area;
}

let lado1Cuadrado = prompt("INGRESA UNA BASE PARA EL CUADRADO");

console.log(areaCuadrado(lado1Cuadrado ));
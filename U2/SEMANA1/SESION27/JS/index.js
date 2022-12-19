function resta(a,b){
    return a-b;
}

console.log(resta(5,4));

function suma(numero1,numero2){

    return numero1+numero2;
}

console.log(suma(20,5));

function multiplicacion(a,b){
    return a*b;
}

console.log(multiplicacion(3,9));

function division(x,y){
    return x/y;
}

console.log(division(25,8));

function sum(a,b,c,d){
    return a+b+c+d
}

console.log(sum(4,8,16,32));

function sumar_restar(a,s,d){
    return a+s-d
}
console.log(sumar_restar(5,8,3));    

function mensaje(a,b){ //ejemplificación de función y condicionales
    if((a+b)>10){
        return("LA SUMA ES MAYOR")
    }
    else{
        return("LA SUMA NO ES MAYOR")
    }
}

console.log(mensaje(8,6)); //cálculo y condicionales

function cálculo(a,b){
    if((a*b)>20){
        return("LA MULTIPLICACION SÍ ES MAYOR A 20")
    }
    else{
        return("NO ES MAYOR A 20")
    }
}

console.log(cálculo(4,3));

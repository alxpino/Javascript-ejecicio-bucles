/*
Enunciado del ejercicio:

Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break 
*/
function factorialFor(num){
    let ans = 1;
    for(let i = 1; i<= num; i++){
        ans *= i;
    }
    return ans;
}

console.log(factorialFor(10))
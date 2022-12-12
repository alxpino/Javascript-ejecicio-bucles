/*
Enunciado del ejercicio:

Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break 
*/
function factorialBreak(num){
    let i = 1;
    let ans = 1;
    while (true){
        ans *= i;
        if(i == num)
            break;
        i++;
    }
    return ans;
}

console.log(factorialBreak(10))

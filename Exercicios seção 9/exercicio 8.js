/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicação(a,b){
    let i = 0
    let multiplicação = 0
    while(i!=b)
    {
        multiplicação += a
        i++
    }
    return multiplicação
}

console.log(multiplicação(0,9))
   
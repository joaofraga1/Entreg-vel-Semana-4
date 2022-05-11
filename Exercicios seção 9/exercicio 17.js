/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

function soma(array)
{
    let soma = 0
    for(let i in array)
    {
        soma+=array[i]
    }
    return soma
}


console.log(soma([10,10,10]))